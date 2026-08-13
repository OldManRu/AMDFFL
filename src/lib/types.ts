export interface LeagueInfo {
  name: string;
  tagline: string;
  sourcePlatform: 'RTSports';
}

export interface Franchise {
  franchiseId: number;
  historicalId: string;
  activeTeamId?: string;
}

export interface TeamIdentity {
  teamId: string;
  franchiseId: number;
  name: string;
  startSeason?: number;
  endSeason?: number;
}

export interface Owner {
  ownerId: string;
  name: string;
}

export interface OwnerTenure {
  ownerId: string;
  franchiseId: number;
  teamId: string;
  startSeason?: number;
  endSeason?: number;
}

export interface TeamSeason {
  season: number;
  franchiseId: number;
  teamId: string;
  wins?: number;
  losses?: number;
  ties?: number;
  pointsFor?: number;
  pointsAgainst?: number;
  playoffWins?: number;
  playoffLosses?: number;
  finish?: number;
}

export interface ChampionshipGame {
  season: number;
  type: 'championship' | 'consolation';
  winnerTeamId?: string;
  loserTeamId?: string;
  winnerScore?: number;
  loserScore?: number;
  sourceNote?: string;
}

export interface IntegrityFlag {
  area: string;
  issue: string;
  action: string;
}
