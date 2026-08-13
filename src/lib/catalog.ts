import teamsA from '../../data/teams/01-07.json';
import teamsB from '../../data/teams/08-10.json';
import teamsC from '../../data/teams/11-12.json';
import teamsD from '../../data/teams/13.json';
import teamsE from '../../data/teams/14.json';

import tenuresA from '../../data/tenures/01-07.json';
import tenuresB from '../../data/tenures/08.json';
import tenure91 from '../../data/tenures/09/09.1.json';
import tenure92 from '../../data/tenures/09/09.2.json';
import tenure93 from '../../data/tenures/09/09.3.json';
import tenure94 from '../../data/tenures/09/09.4.json';
import tenures10 from '../../data/tenures/10.json';
import tenures11 from '../../data/tenures/11.json';
import tenures12 from '../../data/tenures/12-active.json';
import tenures13a from '../../data/normalized/tenures/13a.json';
import tenures13b from '../../data/normalized/tenures/13b.json';
import tenures14a from '../../data/normalized/tenures/final-a.json';

export const teams = [...teamsA, ...teamsB, ...teamsC, ...teamsD, ...teamsE];

export const ownerTenures = [
  ...tenuresA,
  ...tenuresB,
  tenure91,
  tenure92,
  tenure93,
  tenure94,
  ...tenures10,
  ...tenures11,
  { historicalId: '12.0', ownerIds: [], franchiseId: 12, teamId: 'waterbury-cowboys' },
  ...tenures12,
  ...tenures13a,
  ...tenures13b,
  ...tenures14a,
  { historicalId: '14.2', ownerIds: ['larry'], franchiseId: 14, teamId: 'sandusky-redskins' },
];
