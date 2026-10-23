window.ZAID_UAE_EARLY_WARNING = {
  "schema_version": 1,
  "snapshot_id": "watch-review-2026-10-23-160057-uae",
  "checked_at": "2026-10-23T12:00:57Z",
  "mode": "snapshot",
  "incidents": [
    {
      "id": "uaq-coastal-oil-spill-2026-10-22",
      "revision": 2,
      "title": "UAQ coastal oil spill \u2014 temporary beach closures reported",
      "summary": "Temporary UAQ beach/coastal closures remain reported; no reopening or meaningful warning change was verified in the bounded review completed 23 October at 16:00:57 UAE. The MOCCAE statement dated 22 October remains secondhand. Cleanup reporting repeats the known update; its direct page could not be fetched this run. This is partial public-source coverage, not live telemetry or an all-clear.",
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
      "checked_at": "2026-10-23T12:00:57Z",
      "resolved_at": null,
      "sources": [
        {
          "name": "Gulf News \u2014 reported MOCCAE statement",
          "url": "https://gulfnews.com/uae/uae-oil-spill-umm-al-quwain-beaches-closed-as-cleanup-efforts-begin-1.500720483",
          "access": "secondhand",
          "description": "Closure report directly read at 15:59:46 UAE; the underlying MOCCAE statement remains secondhand. Report update remains recorded as 23 October 02:33 UAE from the baseline, but this extract did not state its timezone; UTC+4 is a retained assumption, not newly verified. Not spill onset.",
          "published_at": "2026-10-23T02:33:00+04:00",
          "checked_at": "2026-10-23T11:59:46Z"
        },
        {
          "name": "Gulf News \u2014 municipality cleanup report",
          "url": "https://gulfnews.com/uae/umm-al-quwain-municipality-steps-up-efforts-to-contain-oil-spill-along-emirates-beaches-1.500720994",
          "access": "secondhand",
          "description": "Direct fetch inaccessible at 15:59:46 UAE. Search-indexed text checked by 16:00:57 UAE repeats the known 23 October 14:37 cleanup update; indexed/secondhand evidence only, with timezone unconfirmed in the extract. Recorded UTC+4 publication time is retained from baseline. No reopening verified.",
          "published_at": "2026-10-23T14:37:00+04:00",
          "checked_at": "2026-10-23T12:00:57Z"
        }
      ],
      "unknowns": [
        "Spill onset, extent and cause are unspecified here.",
        "No reopening verified; active means not verified resolved as of the baseline check.",
        "No verified live AQI or current station values. Odours do not quantify exposure.",
        "The report extracts did not confirm the timezone of their 02:33 and 14:37 update labels; baseline UTC+4 values are retained with that assumption disclosed.",
        "Cleanup page inaccessible directly this run; indexed text is not a fresh direct fetch. No verified post-baseline major warning or reopening was found in a bounded Arabic/English scan; coverage is partial."
      ],
      "history": [
        {
          "at": "2026-10-23T15:43:00+04:00",
          "kind": "update",
          "note": "Historical baseline supplied from the existing watch review; no live collection or independent recheck performed during page implementation."
        },
        {
          "at": "2026-10-23T12:00:57Z",
          "kind": "update",
          "note": "First actual watch review completed at 16:00:57 UAE. No verified meaningful warning change from the 15:43 baseline; closure remains not verified resolved. Source access and coverage refreshed only where actually checked."
        },
        {
          "at": "2026-10-23T12:00:57Z",
          "kind": "correction",
          "note": "Clarified that Gulf News update-label timezones were not explicit in the extracts. Preserved baseline UTC+4 publication values as assumptions. Cleanup evidence this run is search-indexed/secondhand after a failed direct fetch."
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
      "checked_at": "2026-10-23T11:59:39Z",
      "published_at": null,
      "detail": "Directly read: current 23 October; warning last updated 24 July, unchanged. Exact original update time unavailable."
    },
    {
      "id": "us",
      "name": "US travel advisory",
      "url": "https://travel.state.gov/en/international-travel/travel-advisories/united-arab-emirates.html",
      "status": "checked",
      "checked_at": "2026-10-23T11:59:46Z",
      "published_at": null,
      "detail": "Direct page checked 15:59:39 UAE; details verified 15:59:46 UAE. Standing Level 3 advisory issued 29 August unchanged. Footer 17 September is not the issue date."
    },
    {
      "id": "emirates",
      "name": "Emirates travel updates",
      "url": "https://www.emirates.com/english/help/travel-updates/",
      "status": "checked",
      "checked_at": "2026-10-23T11:59:39Z",
      "published_at": "2026-10-05T20:31:00+04:00",
      "detail": "Directly read: Tel Aviv flydubai codeshare suspension unchanged; notice dated 5 October at 20:31 Dubai."
    },
    {
      "id": "etihad",
      "name": "Etihad flight status",
      "url": "https://www.etihad.com/en-ae/manage/flight-status",
      "status": "checked",
      "checked_at": "2026-10-23T11:59:39Z",
      "published_at": null,
      "detail": "Directly read: Dammam/Riyadh and Jeddah EY601\u2013604 cancellations through 5 November unchanged. Taipei EY898 on 22 October and EY899 on 23 October delays due to Typhoon Champi also listed, previously seen in source validation; not a new escalation. Publication timestamp absent."
    },
    {
      "id": "flydubai",
      "name": "flydubai operational updates",
      "url": "https://www.flydubai.com/en/help/operational-updates/",
      "status": "checked",
      "checked_at": "2026-10-23T12:00:03Z",
      "published_at": "2026-03-31T16:00:00+04:00",
      "detail": "Direct page checked 15:59:46 UAE; notice list reviewed by 16:00:03 UAE. Regional limited-operations notice still dated 31 March at 16:00 Dubai. No identified new warning; old notice does not establish current normality."
    },
    {
      "id": "maersk",
      "name": "Maersk updates",
      "url": "https://www.maersk.com/stay-ahead",
      "status": "checked",
      "checked_at": "2026-10-23T11:59:57Z",
      "published_at": null,
      "detail": "Direct page checked 15:59:46 UAE; details reviewed 15:59:57 UAE. Update 51 dated 8 October unchanged; existing booking restrictions and Khor Fakkan congestion displayed. Exact publication time unavailable."
    },
    {
      "id": "ncema",
      "name": "NCEMA",
      "url": "https://www.ncema.gov.ae/",
      "status": "timeout",
      "checked_at": "2026-10-23T12:00:25Z",
      "published_at": null,
      "detail": "Fetch timed out at 16:00:25 UAE. Coverage unavailable, not absence of incidents."
    },
    {
      "id": "moccae",
      "name": "MOCCAE original statement",
      "url": null,
      "status": "rejected",
      "checked_at": "2026-10-23T15:43:00+04:00",
      "published_at": null,
      "detail": "Prior request rejection was not retried in this review. Unrefreshed gap; prior attempt time retained. Statement remains secondhand."
    },
    {
      "id": "embassies",
      "name": "Embassy alert pages",
      "url": "https://ae.usembassy.gov/",
      "status": "inaccessible",
      "checked_at": "2026-10-23T12:00:25Z",
      "published_at": null,
      "detail": "US Embassy returned HTTP 403 at 16:00:25 UAE; not bypassed. This attempt covers the US Embassy only; other embassy pages remain unrefreshed gaps."
    },
    {
      "id": "ncm",
      "name": "NCM air-quality platform",
      "url": "https://www.ncm.gov.ae/maps-radars/uae-radars-network?lang=ar",
      "status": "no_current_values",
      "checked_at": "2026-10-23T12:00:25Z",
      "published_at": null,
      "detail": "Returned a shell at 16:00:25 UAE, crawled three days ago; no current warning or station values retrieved."
    },
    {
      "id": "dxb",
      "name": "Dubai Airports flight rows",
      "url": null,
      "status": "unretrievable",
      "checked_at": "2026-10-23T15:43:00+04:00",
      "published_at": null,
      "detail": "Airport live flight rows were not rechecked in this review. Unrefreshed gap; prior attempt time retained. No verified airport-wide anomaly dataset."
    },
    {
      "id": "reddit",
      "name": "Public Reddit",
      "url": null,
      "status": "stale",
      "checked_at": "2026-10-23T15:43:00+04:00",
      "published_at": null,
      "detail": "Prior public-page coverage was stale and was not rechecked in this review. Prior timestamp retained; not used as verified evidence."
    },
    {
      "id": "gn-closure",
      "name": "Gulf News closure report",
      "url": "https://gulfnews.com/uae/uae-oil-spill-umm-al-quwain-beaches-closed-as-cleanup-efforts-begin-1.500720483",
      "status": "checked",
      "checked_at": "2026-10-23T11:59:46Z",
      "published_at": "2026-10-23T02:33:00+04:00",
      "detail": "Closure report directly read at 15:59:46 UAE; the underlying MOCCAE statement remains secondhand. Report update remains recorded as 23 October 02:33 UAE from the baseline, but this extract did not state its timezone; UTC+4 is a retained assumption, not newly verified. Not spill onset."
    },
    {
      "id": "gn-cleanup",
      "name": "Gulf News cleanup report",
      "url": "https://gulfnews.com/uae/umm-al-quwain-municipality-steps-up-efforts-to-contain-oil-spill-along-emirates-beaches-1.500720994",
      "status": "inaccessible",
      "checked_at": "2026-10-23T11:59:46Z",
      "published_at": "2026-10-23T14:37:00+04:00",
      "detail": "Direct fetch inaccessible at 15:59:46 UAE. Search-indexed text checked by 16:00:57 UAE repeats the known 23 October 14:37 cleanup update; indexed/secondhand evidence only, with timezone unconfirmed in the extract. Recorded UTC+4 publication time is retained from baseline. No reopening verified."
    }
  ]
};
