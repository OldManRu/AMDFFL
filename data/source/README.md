# Migration source data

These files preserve data extracted from the legacy WordPress site before it is normalized into the canonical AMD FFL data model.

- `franchises/` contains historical franchise and owner/team lineage source records.
- `championships/` contains published championship results in small batches.
- `awards/` contains award-history source records.

Source values are preserved as published. Suspected typos or inconsistencies should be recorded in `data/integrity-flags.json` and verified before correction.

The application loads these chunked JSON files through `src/lib/data.ts`, so migration files can remain small without complicating the site code.
