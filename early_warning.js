(function (root) {
  'use strict';
  const STATUS = ['active', 'resolved'];
  const SEVERITY = ['informational', 'watch', 'moderate', 'high', 'critical'];
  const CATEGORIES = ['environment', 'weather', 'transport', 'infrastructure', 'public_health', 'official_advisory', 'maritime'];
  const COVERAGE = ['checked', 'timeout', 'rejected', 'inaccessible', 'no_current_values', 'unretrievable', 'stale', 'offline', 'unknown'];
  function safeURL(value) {
    try {
      const u = new URL(value);
      if (u.protocol !== 'https:' || u.username || u.password || !u.hostname.includes('.') || /^(localhost|127\.|10\.|192\.168\.|169\.254\.|0\.)/i.test(u.hostname) || /\.(local|internal)$/i.test(u.hostname) || /^172\.(1[6-9]|2\d|3[01])\./.test(u.hostname) || u.hostname.includes(':')) return null;
      return u.href;
    } catch (_) { return null; }
  }
  function timestamp(value) { return typeof value === 'string' && /T.*(?:Z|[+-]\d\d:\d\d)$/.test(value) && Number.isFinite(Date.parse(value)); }
  function text(value, max = 4000) { return typeof value === 'string' && value.trim().length > 0 && value.length <= max; }
  function validate(d) {
    if (!d || d.schema_version !== 1 || !text(d.snapshot_id, 100) || !timestamp(d.checked_at) || !['historical', 'snapshot'].includes(d.mode) || !Array.isArray(d.incidents) || !Array.isArray(d.coverage) || d.incidents.length > 200 || d.coverage.length > 200) throw new Error('Invalid snapshot envelope');
    const ids = new Set();
    d.incidents.forEach(i => {
      if (!i || !text(i.id, 100) || ids.has(i.id) || !Number.isInteger(i.revision) || i.revision < 1 || !STATUS.includes(i.status) || !SEVERITY.includes(i.severity) || !CATEGORIES.includes(i.category) || !['low','medium','high'].includes(i.confidence) || !text(i.confidence_basis) || !text(i.title, 200) || !text(i.summary) || !Array.isArray(i.geographies) || !i.geographies.length || !i.geographies.every(x => text(x, 80)) || !timestamp(i.checked_at) || (i.event_at !== null && !timestamp(i.event_at)) || (i.resolved_at !== null && !timestamp(i.resolved_at)) || (i.status === 'resolved' && !timestamp(i.resolved_at)) || !Array.isArray(i.unknowns) || !i.unknowns.every(x => text(x)) || !Array.isArray(i.history) || !Array.isArray(i.sources) || !i.sources.length) throw new Error('Invalid incident');
      ids.add(i.id);
      i.sources.forEach(s => { if (!s || !text(s.name, 200) || !safeURL(s.url) || !['direct','secondhand'].includes(s.access) || !text(s.description) || !timestamp(s.checked_at) || (s.published_at !== null && !timestamp(s.published_at))) throw new Error('Invalid incident source'); });
      i.history.forEach(h => { if (!h || !timestamp(h.at) || !text(h.note) || !['update','correction','resolution'].includes(h.kind)) throw new Error('Invalid history'); });
    });
    const cids = new Set();
    d.coverage.forEach(c => {
      if (!c || !text(c.id,100) || cids.has(c.id) || !text(c.name,200) || !COVERAGE.includes(c.status) || !timestamp(c.checked_at) || (c.published_at !== null && !timestamp(c.published_at)) || !text(c.detail) || (c.url !== null && !safeURL(c.url))) throw new Error('Invalid coverage');
      cids.add(c.id);
    });
    return d;
  }
  function model(raw, now = Date.now()) {
    try {
      const data = validate(raw);
      const age = now - Date.parse(data.checked_at);
      return { data, state: age < -300000 ? 'clock-warning' : (data.mode === 'historical' ? 'historical' : age > 90 * 60000 ? 'stale' : 'snapshot'), age };
    } catch (_) { return { data: null, state: raw == null ? 'missing' : 'malformed' }; }
  }
  function uae(value) {
    if (!value) return 'Unknown / not supplied';
    return new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Dubai', year:'numeric', month:'short', day:'2-digit', hour:'2-digit', minute:'2-digit', hour12:false }).format(new Date(value)) + ' UAE (UTC+4)';
  }
  function filter(incidents, geography, category) { return incidents.filter(i => (!geography || i.geographies.includes(geography)) && (!category || i.category === category)); }
  function mount(doc, options = {}) {
    const panel = doc.getElementById('uae-early-warning');
    if (!panel) return;
    const el = (tag, value, cls) => { const e=doc.createElement(tag); if(value !== undefined) e.textContent=value; if(cls)e.className=cls; return e; };
    const link = (label, url) => { const a=el('a',label); const safe=safeURL(url); if(safe){a.href=safe;a.target='_blank';a.rel='noopener noreferrer';} return a; };
    let current = null, transportError = false, refreshing = false;
    const wrapper=el('div',undefined,'ew-wrap'); panel.replaceChildren(wrapper);
    wrapper.append(el('h2','UAE Early-Warning'));
    wrapper.append(el('p','Public-source snapshot  no background polling  no automatic sync','ew-muted'));
    const refresh=el('button','Reload saved snapshot');refresh.type='button';wrapper.append(refresh);
    const banner=el('div',undefined,'ew-banner');banner.setAttribute('role','status');banner.setAttribute('aria-live','polite');wrapper.append(banner);
    wrapper.append(el('p','Supplements official emergency alerts. This is not a prediction or emergency-response service. Use official instructions for immediate safety decisions.','ew-disclaimer'));
    const controls=el('div',undefined,'ew-controls');wrapper.append(controls);
    const geo=el('select'), cat=el('select');geo.setAttribute('aria-label','Filter geography');cat.setAttribute('aria-label','Filter category');
    controls.append(el('label','Geography '),geo,el('label','Category '),cat);
    const list=el('div'),coverage=el('div');wrapper.append(list,coverage);
    function fill(select, first, values) {
      const before=select.value;select.replaceChildren();const a=el('option',first);a.value='';select.append(a);
      values.forEach(v=>{const o=el('option',v.replaceAll('_',' '));o.value=v;select.append(o);});
      select.value=values.includes(before)?before:'';
    }
    function render() {
      const view=model(current, options.now ? options.now() : Date.now());
      list.replaceChildren();coverage.replaceChildren();
      banner.className='ew-banner';
      if (!view.data) {
        banner.textContent=(transportError?'Snapshot file offline or unavailable. ':view.state==='malformed'?'Saved snapshot is malformed and has been withheld. ':'No saved snapshot is available. ')+'Coverage is unknown; this is not an all-clear.';
        fill(geo,'All geographies',[]);fill(cat,'All categories',[]);return;
      }
      const d=view.data;
      const labels={historical:'Historical baseline - not live',stale:'Stale snapshot - not live','clock-warning':'Snapshot clock is ahead - freshness unverified',snapshot:'Saved snapshot - not a live feed'};
      banner.textContent=labels[view.state]+'. Last watch check: '+uae(d.checked_at)+'. Snapshot '+d.snapshot_id+'. Coverage gaps do not establish safety.';
      fill(geo,'All geographies',[...new Set(d.incidents.flatMap(i=>i.geographies))].sort());fill(cat,'All categories',[...new Set(d.incidents.map(i=>i.category))].sort());
      const visible=filter(d.incidents,geo.value,cat.value);
      for(const status of STATUS) {
        const section=el('section');section.append(el('h3',status==='active'?'Active / not verified resolved':'Resolved incidents'));
        const rows=visible.filter(i=>i.status===status);
        if(!rows.length)section.append(el('p',status==='active'?'No matching active incident records in this snapshot. This is not an all-clear.':'No matching verified resolutions recorded.'));
        rows.forEach(i=>{
          const card=el('article',undefined,'ew-card');card.append(el('h4',i.title));
          card.append(el('p','Severity: '+i.severity+'  Evidence confidence: '+i.confidence+'  '+i.geographies.join(', ')+'  '+i.category.replaceAll('_',' '),'ew-badges'));
          card.append(el('p',i.summary));card.append(el('p','Confidence basis: '+i.confidence_basis));
          card.append(el('p','Event: '+uae(i.event_at)+' | Checked: '+uae(i.checked_at)+(i.status==='resolved'?' | Resolved: '+uae(i.resolved_at):''),'ew-muted'));
          const incidentAge=(options.now?options.now():Date.now())-Date.parse(i.checked_at);
          if(incidentAge>90*60000||incidentAge < -300000)card.append(el('p','Incident check is stale or its clock is unverified; current status is unknown.','ew-muted'));
          card.append(el('h5','Sources'));
          i.sources.forEach(s=>{const p=el('p');p.append(link(s.name,s.url),el('span',' - '+s.access+'  Published/updated: '+uae(s.published_at)+'  Checked: '+uae(s.checked_at)));card.append(p,el('p',s.description,'ew-muted'));});
          card.append(el('h5','Unknowns'));const ul=el('ul');(i.unknowns.length?i.unknowns:['No explicit unknowns supplied; this does not establish completeness.']).forEach(x=>ul.append(el('li',x)));card.append(ul);
          const details=el('details');details.append(el('summary','Corrections and history ('+i.history.length+')'));
          i.history.forEach(h=>details.append(el('p',uae(h.at)+'  '+h.kind+': '+h.note)));card.append(details);section.append(card);
        });list.append(section);
      }
      coverage.append(el('h3','Source coverage and access gaps'));
      if(!d.coverage.length)coverage.append(el('p','No source coverage records supplied. Coverage is unknown; not an all-clear.'));
      d.coverage.forEach(c=>{
        const age=(options.now?options.now():Date.now())-Date.parse(c.checked_at);
        const stale=age>90*60000||age < -300000;
        const card=el('div',undefined,'ew-coverage');const head=el('p');head.append(c.url?link(c.name,c.url):el('strong',c.name),el('span',' - '+c.status.replaceAll('_',' ')+(stale?'  check stale / freshness unverified':'')));card.append(head,el('p',c.detail),el('p','Checked: '+uae(c.checked_at)+'  Source publication/update: '+uae(c.published_at),'ew-muted'));coverage.append(card);
      });
    }
    function accept(value) {current=value;transportError=false;render();}
    refresh.addEventListener('click',()=>{
      if(refreshing)return;refreshing=true;refresh.disabled=true;
      const script=doc.createElement('script');script.src='./early_warning_data.js?reload='+Date.now();
      root.ZAID_UAE_EARLY_WARNING=undefined;
      const done=()=>{refreshing=false;refresh.disabled=false;script.remove();};
      script.onload=()=>{accept(root.ZAID_UAE_EARLY_WARNING);done();};
      script.onerror=()=>{current=null;transportError=true;render();done();};
      doc.head.append(script);
    });
    geo.addEventListener('change',render);cat.addEventListener('change',render);
    accept(root.ZAID_UAE_EARLY_WARNING);
    return {accept,render};
  }
  const api={safeURL,validate,model,uae,filter,mount};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  else {root.ZaidEarlyWarning=api;mount(root.document);}
})(typeof window!=='undefined'?window:globalThis);
