export const days: Days[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
export const MIN_VALUE: number = 0
export const MAX_VALUE: number = 86399

// TODO make branding for numbers

const isOpeningHour = (value: unknown): value is OpeningHour => {
    const item = value as OpeningHour
    if (Object.keys(item).length !== 2) return false

    const statusValues: Status[] = ['open', 'close']
    if (!statusValues.includes(item.type)) return false

    if (typeof item.value !== "number") return false

    if (item.value < MIN_VALUE) return false
    if (item.value > MAX_VALUE) return false

    return true
}

export function isOpeningHours(value: any): value is OpeningHour[] {
    if (!Array.isArray(value)) return false
    try {
        if (!value.every(isOpeningHour)) return false

        const unorderedTypes = value.some((el, i, arr) => el.type === arr[i + 1]?.type)
        if (unorderedTypes) return false
    } catch {
        console.error('Invalid API json')
        return false
    }
    return true
}

export function isInput(input: any): input is Input {
    if (!input) return false
    if (typeof input !== 'object' || Array.isArray(input)) return false

    try {
        const keys = Object.keys(input)
        if (keys.length !== days.length) return false
        if (days.some(day => !keys.includes(day))) return false

        keys.some(key => {
            if (!isOpeningHours(input[key])) return false
        })
    } catch {
        console.error('Invalid API json')
        return false
    }

    return true
}