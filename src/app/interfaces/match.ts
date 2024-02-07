export interface Match {
  id: string,
  data: {
    localTeam?: string,
    awayTeam?: string,
    localGoals?: number,
    awayGoals?: number,
    date?: Date,
    deleted: boolean
  }
}
