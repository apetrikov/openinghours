// a typeguard
// this is necessary since we read a JSON

// get input: unknown
// return true if it is an array

// JSON.parse +
// is Object +
// keys are Days of week only +

// OpeningHours
// values are arrays
// each value element is Object[]
// empty array or
// keys are Status
// keys are always open - close order
// values are numbers between 0 and 86399

export const days: Days[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

export function isOpeningHour(value: any): value is OpeningHour {
  return true
}
// TODO add testcases
// make branding for numbers
export function isInput(input: any): input is Input {
    if (!input) return false
    if (typeof input !== 'object' || Array.isArray(input)) return false

    try {
        const keys = Object.keys(input)
        if (keys.length !== days.length) return false
        if (days.some(day => !keys.includes(day))) return false

        keys.some(key => {
            if (!isOpeningHour(input[key])) return false
        })
    } catch {
        console.error('Invalid API json')
        return false
    }

    return true
}