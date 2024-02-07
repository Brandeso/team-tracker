export interface Match {
  id: string,
  data: {
    season?: string,
    localTeam?: string,
    awayTeam?: string,
    localGoals?: number,
    awayGoals?: number,
    date?: Date,
    squad?: String[],
    scorers?: { name: string, goals: number }[],
    deleted: boolean
  }
}
