import league from '../../data/league.json';
import franchises from '../../data/franchises.json';
import owners from '../../data/owners.json';
import records from '../../data/records.json';
import awards from '../../data/awards.json';
import hallOfFame from '../../data/hall-of-fame.json';
import integrityFlags from '../../data/integrity-flags.json';

const franchiseSourceModules = import.meta.glob('../../data/source/franchises/**/*.json', {
  eager: true,
  import: 'default',
});

const championshipSourceModules = import.meta.glob('../../data/source/championships/*.json', {
  eager: true,
  import: 'default',
});

export const franchiseSource = Object.values(franchiseSourceModules);
export const championshipSource = Object.values(championshipSourceModules).flat();

export const amdffl = {
  league,
  franchises,
  owners,
  records,
  awards,
  hallOfFame,
  integrityFlags,
  source: {
    franchises: franchiseSource,
    championships: championshipSource,
  },
};
