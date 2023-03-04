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
        caption: "Monday",
        value: "Closed",
        isGrey: true
    },
    {
        caption: "Tuesday",
        value: "10 AM - 6 PM",
    },
    {
        caption: "Wednesday",
        value: "Closed",
        isGrey: true
    },
    {
        caption: "Thursday",
        value: "10 AM - 6 PM",
    },
    {
        caption: "Friday",
        value: "10 AM - 1 AM",
    },
    {
        caption: "Saturday",
        value: "10 AM - 1 AM",
    },
    {
        caption: "Sunday",
        value: "12 PM - 9 PM",
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
              value: 15840
            },
            {
                type: "close",
                value: 29580
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
                caption: "Monday",
                value: "4:26 AM - 8:13 AM",
            },
            {
                value: "10 AM - 6 PM",
            },
        ]
        const input = fullWeekInput()
        input.monday = multipleInput
        let output = fullWeekOutput()
        output = multipleOutput.concat(output.slice(1))
        expect(convert(input)).toStrictEqual(output)
    })
})
