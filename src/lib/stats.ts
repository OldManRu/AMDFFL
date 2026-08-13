import type { TeamSeason } from './types';

export function totalWins(seasons: TeamSeason[]): number {
  return seasons.reduce((sum, season) => sum + (season.wins ?? 0), 0);
}

export function totalLosses(seasons: TeamSeason[]): number {
  return seasons.reduce((sum, season) => sum + (season.losses ?? 0), 0);
}

export function winningPercentage(seasons: TeamSeason[]): number | null {
  const wins = totalWins(seasons);
  const losses = totalLosses(seasons);
  const ties = seasons.reduce((sum, season) => sum + (season.ties ?? 0), 0);
  const games = wins + losses + ties;
  return games ? (wins + ties / 2) / games : null;
}
