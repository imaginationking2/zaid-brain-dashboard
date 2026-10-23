window.ZAID_UAE_EARLY_WARNING = {
  "schema_version": 1,
  "snapshot_id": "historical-baseline-2026-10-23-1543-uae",
  "checked_at": "2026-10-23T15:43:00+04:00",
  "mode": "historical",
  "incidents": [
    {
      "id": "uaq-coastal-oil-spill-2026-10-22",
      "revision": 1,
      "title": "UAQ coastal oil spill \u2014 temporary beach closures reported",
      "summary": "MOCCAE statement dated 22 October, reproduced by Gulf News, reports temporary UAQ beach/coastal closures and odours in Ajman, Sharjah and UAQ. A 23 October cleanup report describes containment efforts. Reopening has not been verified. This is a dated historical baseline, not a current closure check.",
      "status": "active",
      "severity": "moderate",
      "confidence": "medium",
      "confidence_basis": "Two attributed reports in the same news outlet; official statement was read secondhand. Scope and reopening remain unverified. Severity describes reported local disruption, not a forecast.",
      "category": "environment",
      "geographies": [
        "Umm Al Quwain",
        "Ajman",
        "Sharjah"
      ],
      "event_at": null,
      "checked_at": "2026-10-23T15:43:00+04:00",
      "resolved_at": null,
      "sources": [
        {
          "name": "Gulf News \u2014 reported MOCCAE statement",
          "url": "https://gulfnews.com/uae/uae-oil-spill-umm-al-quwain-beaches-closed-as-cleanup-efforts-begin-1.500720483",
          "access": "secondhand",
          "description": "MOCCAE statement dated 22 October reproduced by the outlet; MOCCAE original was not directly read. Timestamp is the report update, not spill onset.",
          "published_at": "2026-10-23T02:33:00+04:00",
          "checked_at": "2026-10-23T15:43:00+04:00"
        },
        {
          "name": "Gulf News \u2014 municipality cleanup report",
          "url": "https://gulfnews.com/uae/umm-al-quwain-municipality-steps-up-efforts-to-contain-oil-spill-along-emirates-beaches-1.500720994",
          "access": "secondhand",
          "description": "Attributed municipality containment/cleanup report. Not independent verification of every closure or of reopening.",
          "published_at": "2026-10-23T14:37:00+04:00",
          "checked_at": "2026-10-23T15:43:00+04:00"
        }
      ],
      "unknowns": [
        "Spill onset, extent and cause are unspecified here.",
        "No reopening verified; active means not verified resolved as of the baseline check.",
        "No verified live AQI or current station values. Odours do not quantify exposure."
      ],
      "history": [
        {
          "at": "2026-10-23T15:43:00+04:00",
          "kind": "update",
          "note": "Historical baseline supplied from the existing watch review; no live collection or independent recheck performed during page implementation."
        }
      ]
    }
  ],
  "coverage": [
    {
      "id": "uk",
      "name": "UK FCDO",
      "url": "https://www.gov.uk/foreign-travel-advice/united-arab-emirates",
      "status": "checked",
      "checked_at": "2026-10-23T15:43:00+04:00",
      "published_at": null,
      "detail": "Direct page read by existing watch. Standing advice updated 24 July; not a new incident. Exact update time unavailable."
    },
    {
      "id": "us",
      "name": "US travel advisory",
      "url": "https://travel.state.gov/en/international-travel/travel-advisories/united-arab-emirates.html",
      "status": "checked",
      "checked_at": "2026-10-23T15:43:00+04:00",
      "published_at": null,
      "detail": "Direct page read by existing watch. Standing advisory dated 29 August; not a new incident. Exact publication time unavailable."
    },
    {
      "id": "emirates",
      "name": "Emirates travel updates",
      "url": "https://www.emirates.com/english/help/travel-updates/",
      "status": "checked",
      "checked_at": "2026-10-23T15:43:00+04:00",
      "published_at": null,
      "detail": "Directly read: 5 October Tel Aviv codeshare standing notice; not evidence of a new UAE-wide disruption. Exact time unavailable."
    },
    {
      "id": "etihad",
      "name": "Etihad flight status",
      "url": "https://www.etihad.com/en-ae/manage/flight-status",
      "status": "checked",
      "checked_at": "2026-10-23T15:43:00+04:00",
      "published_at": null,
      "detail": "Directly read route-specific AUH\u2013Dammam/Riyadh/Jeddah cancellations through 5 November. Publication timestamp absent; not an airport-wide anomaly dataset."
    },
    {
      "id": "flydubai",
      "name": "flydubai operational updates",
      "url": "https://www.flydubai.com/en/help/operational-updates/",
      "status": "checked",
      "checked_at": "2026-10-23T15:43:00+04:00",
      "published_at": null,
      "detail": "Directly read standing notice dated 31 March; exact time unavailable. Do not treat as a fresh event."
    },
    {
      "id": "maersk",
      "name": "Maersk updates",
      "url": "https://www.maersk.com/stay-ahead",
      "status": "checked",
      "checked_at": "2026-10-23T15:43:00+04:00",
      "published_at": null,
      "detail": "Directly read 8 October update; no newly verified incident asserted here. Exact time unavailable."
    },
    {
      "id": "ncema",
      "name": "NCEMA",
      "url": null,
      "status": "timeout",
      "checked_at": "2026-10-23T15:43:00+04:00",
      "published_at": null,
      "detail": "Request timed out during baseline watch. Coverage unavailable, not absence of incidents."
    },
    {
      "id": "moccae",
      "name": "MOCCAE original statement",
      "url": null,
      "status": "rejected",
      "checked_at": "2026-10-23T15:43:00+04:00",
      "published_at": null,
      "detail": "Request rejected; oil-spill statement known only through attributed news reproduction."
    },
    {
      "id": "embassies",
      "name": "Embassy alert pages",
      "url": null,
      "status": "inaccessible",
      "checked_at": "2026-10-23T15:43:00+04:00",
      "published_at": null,
      "detail": "Alert pages inaccessible to the baseline check."
    },
    {
      "id": "ncm",
      "name": "NCM air-quality platform",
      "url": null,
      "status": "no_current_values",
      "checked_at": "2026-10-23T15:43:00+04:00",
      "published_at": null,
      "detail": "Platform readable but no current station values retrieved. No verified live AQI."
    },
    {
      "id": "dxb",
      "name": "Dubai Airports flight rows",
      "url": null,
      "status": "unretrievable",
      "checked_at": "2026-10-23T15:43:00+04:00",
      "published_at": null,
      "detail": "Live flight rows not retrievable. No airport-wide anomaly dataset verified."
    },
    {
      "id": "reddit",
      "name": "Public Reddit",
      "url": null,
      "status": "stale",
      "checked_at": "2026-10-23T15:43:00+04:00",
      "published_at": null,
      "detail": "Public pages stale; not used as verified incident evidence."
    }
  ]
};
