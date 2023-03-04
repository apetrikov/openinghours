// a typeguard
// this is necessary since we read a JSON

// get input: unknown
// return true if it is an array

// JSON.parse
// is Object
// keys are Days of week only
// values are arrays
// each value element is Object[]
// empty array or
// keys are Status
// first it open
// last is close
// keys are always open - close order
// values are numbers between 0 and 86399

export function isValidInput(input: unknown): input is Input {
    return true
}