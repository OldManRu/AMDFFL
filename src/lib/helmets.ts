const helmetByTeamId: Record<string, string> = {
  'east-peoria-red-raiders': '/images/helmets/east_peoria.png',
  'cathedral-golden-gales': '/images/helmets/Cathedral.png',
  'west-catholic-burrs': '/images/helmets/westcatholic.png',
  'deckerville-eagles': '/images/helmets/deckerville.png',
  'creston-polar-bears': '/images/helmets/creston.png',
  'excelsior-springs-tigers': '/images/helmets/excelsior.png',
  'turkeyfoot-rams': '/images/helmets/turkeyfoot.png',
  'illini-west-chargers': '/images/helmets/illini.png',
  'springfield-stars': '/images/helmets/springfieldstars.png',
  'leto-falcons-f5': '/images/helmets/leto.png',
  'east-grand-rapids-pioneers': '/images/helmets/eastgrandrapids.png',
  'oak-ridge': '/images/helmets/oakridge.png',
  'hinsdale-pacers': '/images/helmets/hinsdalepacers.png',
  'great-falls-bison': '/images/helmets/greatfallsbison.png',
  'lees-summit-tigers-f6': '/images/helmets/leesummit.png',
  'vincennes-lincoln-alices': '/images/helmets/Vincennes.png',
  'storm-lake-tornadoes': '/images/helmets/stormlake.png',
  'kimball-knights': '/images/helmets/kimballknights.png',
  'roosevelt-rough-riders': '/images/helmets/roosevelt.png',
  'hennessey-eagles': '/images/helmets/hennessey.png',
  'highland-park-giants': '/images/helmets/highlandpark.png',
  'simi-valley-pioneers': '/images/helmets/simivalley.png',
  'brophy-broncos': '/images/helmets/brophy.png',
  'cedaredge-bruins': '/images/helmets/cedaredge.png',
  'blacklick-vikings': '/images/helmets/blacklick.png',
  'lamar-trojans': '/images/helmets/lamar.png',
  'ridge-bolts': '/images/helmets/Ridge.png',
  'leto-falcons-f11': '/images/helmets/leto.png',
  'lees-summit-tigers-f12': '/images/helmets/leesummit.png',
  'north-decatur-chargers': '/images/helmets/northdectur.png',
  'mervo-mustangs': '/images/helmets/mervo.png',
  'sandusky-redskins': '/images/helmets/sandusky.png',
};

export function helmetForTeam(teamId?: string | null) {
  return teamId ? helmetByTeamId[teamId] ?? null : null;
}

export { helmetByTeamId };
