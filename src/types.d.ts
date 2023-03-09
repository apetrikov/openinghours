type Status = 'open' | 'close'

// SecondsInDayRange type is for numbers in a range [0, 86399]. Guarantees a number of seconds in a day.
type SecondsInDayRange = number & { __type: 'SecondsInDayRange' }
type OpeningHour = {
  type: Status
  value: SecondPerDay
}
type Days = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
type Input = Record<Days, OpeningHour[]>
type Item = {
  caption?: string
  value?: string
  marker?: string
  isGrey?: boolean
}
