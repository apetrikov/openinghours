import {convert} from "../converter";

const fullWeekInput = (): Input => ({
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

const fullWeekOutput = (): Item[] => [
    {
        caption: "monday",
        value: "Closed",
        isGrey: true
    },
    {
        caption: "tuesday",
        value: "36000 - 64800",
    },
    {
        caption: "wednesday",
        value: "Closed",
        isGrey: true
    },
    {
        caption: "thursday",
        value: "36000 - 64800",
    },
    {
        caption: "friday",
        value: "36000 - 3600",
    },
    {
        caption: "saturday",
        value: "36000 - 3600",
    },
    {
        caption: "sunday",
        value: "43200 - 75600",
    }
]

describe('convert', () => {
    it('handle full week with next week closing', () => {
        expect(convert(fullWeekInput())).toStrictEqual(fullWeekOutput())
    })

    it('handle full week with multiple working periods', () => {
        const multipleInput: OpeningHour[] = [
            {
                type: "open",
                value: 16000
            },
            {
                type: "close",
                value: 24800
            },
            {
                type: "open",
                value: 36000
            },
            {
                type: "close",
                value: 64800
            }
        ]
        const multipleOutput: Item[] = [
            {
                caption: "monday",
                value: "16000 - 24800",
            },
            {
                value: "36000 - 64800",
            },
        ]
        const input = fullWeekInput()
        input.monday = multipleInput
        let output = fullWeekOutput()
        output = multipleOutput.concat(output.slice(1))
        expect(convert(input)).toStrictEqual(output)
    })
})
