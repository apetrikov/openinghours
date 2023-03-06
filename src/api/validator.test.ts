import {isInput, days} from "./validator";

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
        const inputWithINvalidDay = {...week, 'wrongDayName': []}

        expect(isInput(inputWithINvalidDay)).toBe(false)
    })

//    test('for wrong opening hour return false', () => {
//        const week = validFullWeek() as Record<string, []>
//        const inputWithINvalidDay = {...week, 'wrongDayName': []}
//
//        expect(isInput(inputWithINvalidDay)).toBe(false)
//    })

    test('for proper json input return true', () => {
        expect(isInput(validFullWeek())).toBe(true)
    })
})