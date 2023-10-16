export type Problem = {
  type: 'interview' | 'daily'
  id: string
  title: string
  finished: boolean
  complexity: 'hard' | 'medium' | 'easy'
  code: string
  lastUpdate: string
  link: string
}
