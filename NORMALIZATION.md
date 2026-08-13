# AMD FFL Normalization Status

Normalization is grounded in the 2026 WordPress export. Source anomalies are preserved rather than silently corrected.

## Complete

- 14 persistent franchise slots
- 41 owner identities
- 45 historical team identities
- 45 historical ownership/tenure relationships assembled by `src/lib/catalog.ts`
- 80 valid published award winners: League MVP 1-19, Offensive Rookie 1-19, Defensive Rookie 1-19, Manager of the Year 1-20, Defensive Player of the Year 18-20
- All 38 aggregate all-time standings rows
- Historical headline record book entries
- Hall of Fame classes for 2020-2023 and 2025
- Season 20 Pro Bowl roster mapped to stable team IDs

## Championship history

- 18 of 20 completed championship games are stored in normalized championship JSON.
- Seasons 7 and 8 are fully resolved from the preserved source but their standalone normalized writes remain connector-blocked.
- Season 20 winner score remains `2229.6` exactly as published and is flagged for verification.

## Hall of Fame

- 2020-2023 and 2025 classes are normalized.
- Four of six 2024 inductees are persisted; the two defensive entries remain preserved in source but their writes are connector-blocked.
- The 2026 class is blank in the source and is not treated as populated data.

## Legacy all-time standings

- All 38 aggregate standings rows now have normalized stable-team references.
- Lake Shore's source year range `2013-27` is intentionally preserved as an integrity flag.
- Lamar County and other source rows with missing playoff values remain null/missing rather than zero.

## Pro Bowls

- Game summaries are normalized for Seasons 5-16 and 19-20.
- Seasons 17-18 remain preserved in source but their summary writes are connector-blocked.
- Season 20 player-by-player rosters are normalized.
- Earlier player-by-player Pro Bowl rosters remain to be normalized.

## Source gaps requiring additional data

- Head-to-Head matchup data lives in two externally published Google Sheets; their cell data is not contained in the WordPress export.
- Complete team-by-team season results are not present in the WordPress export. Historical RTSports exports/pages will be needed to calculate all career statistics from first principles.

## Next normalization work

1. Normalize remaining Pro Bowl rosters.
2. Finish the two blocked 2024 Hall of Fame entries if the connector permits.
3. Keep Seasons 7-8 championship results source-resolved until the connector accepts a canonical write.
4. Acquire Head-to-Head sheets and historical RTSports season data.
