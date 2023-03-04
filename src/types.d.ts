type Status = 'open' | 'close'
type OpeningHour = {
  type: Status,
  value: number
}
type Days = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'| 'sunday'
type Input = Record<Days, OpeningHour[]>
type Item = {
  caption?: string,
  value?: string,
  marker?: string,
  isGrey?: boolean
}