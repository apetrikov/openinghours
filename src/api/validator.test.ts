import {isInput, days, isOpeningHours, MIN_VALUE, MAX_VALUE} from "./validator";

const validFullWeek = (): unknown => ({
    monday: [],
    tuesday: [
        {
            type: "open",
            value: 36000
        },
        {
            type: "close",
            value: 64800
        }
    ],
    wednesday: [],
    thursday: [
        {
            type: "open",
            value: 36000
        },
        {
            type: "close",
            value: 64800
        }
    ],
    friday: [
        {
            type: "open",
            value: 36000
        }
    ],
    saturday: [
        {
            type: "close",
            value: 3600
        },
        {
            type: "open",
            value: 36000
        }
    ],
    sunday: [
        {
            type: "close",
            value: 3600
        },
        {
            type: "open",
            value: 43200
        },
        {
            type: "close",
            value: 75600
        }
    ]
})

describe('isValidInput', () => {
    test('for proper input return true', () => {
        expect(isInput(validFullWeek())).toBe(true)
    })

    test('for primitives return false', () => {
        expect(isInput(undefined)).toBe(false)
        expect(isInput(null)).toBe(false)
        expect(isInput(true)).toBe(false)
        expect(isInput(1)).toBe(false)
        expect(isInput('string')).toBe(false)
        expect(isInput(Symbol())).toBe(false)
        expect(isInput(BigInt(1))).toBe(false)
    })

    test('for empty return false', () => {
        expect(isInput(['1', '2'])).toBe(false)
        expect(isInput(() => {
        })).toBe(false)
    })

    test('for days less or more than in days array return false', () => {
        const week = validFullWeek() as Record<string, []>
        const inputWith8Days = {...week, 'extraDay': '23'}

        expect(isInput({})).toBe(false)
        expect(isInput({monday: []})).toBe(false)
        expect(isInput(inputWith8Days)).toBe(false)
    })

    test('for wrong day name return false', () => {
        const week = validFullWeek() as Record<string, []>
        delete week[days[0]]
        const inputWithInvalidDay = {...week, 'wrongDayName': []}

        expect(isInput(inputWithInvalidDay)).toBe(false)
    })

    test('for wrong opening hour return false', () => {
        const week = validFullWeek() as Record<string, []>
        const inputWithInvalidDay = {...week, 'wrongDayName': []}

        expect(isInput(inputWithInvalidDay)).toBe(false)
    })
})

const validOpeningHour = (): unknown => [
    {
        type: "close",
        value: 3600
    },
    {
        type: "open",
        value: 43200
    },
    {
        type: "close",
        value: 75600
    },
    {
        type: "open",
        value: 43200
    },
]

fdescribe('isOpeningHour', () => {
    test('for proper input return true', () => {
        expect(isOpeningHours(validOpeningHour())).toBe(true)
    })

    test('for not array input return false', () => {
        expect(isOpeningHours({})).toBe(false)
    })

    test('for non-object working hours return false', () => {
        expect(isOpeningHours(['1'])).toBe(false)
    })

    test('for unspecified type return false', () => {
        expect(isOpeningHours([{type: 'WRONG_TYPE', value: 0}])).toBe(false)
    })

    test('for non-number value return false', () => {
        expect(isOpeningHours([{type: 'close', value: '0'}])).toBe(false)
    })

    test('for unordered types return false', () => {
        const unorderedTypes = [
            {
                type: "close",
                value: 0
            },
            {
                type: "open",
                value: 1
            },
            {
                type: "close",
                value: 2
            },
            {
                type: "close",
                value: 3
            },
        ]
        expect(isOpeningHours(unorderedTypes)).toBe(false)
    })

    test('for values under min return false', () => {
        expect(isOpeningHours([{type: 'open', value: MIN_VALUE - 1}])).toBe(false)
    })

    test('for values over max return false', () => {
        expect(isOpeningHours([{type: 'open', value: MAX_VALUE + 1}])).toBe(false)
    })
})