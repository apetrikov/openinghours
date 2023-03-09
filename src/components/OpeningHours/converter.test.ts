import { convert, Marker, Closed } from './converter'

const fullWeekInput = (): Input => ({
  monday: [],
  tuesday: [
    {
      type: 'open',
      value: 36000,
    },
    {
      type: 'close',
      value: 64800,
    },
  ],
  wednesday: [],
  thursday: [
    {
      type: 'open',
      value: 36000,
    },
    {
      type: 'close',
      value: 64800,
    },
  ],
  friday: [
    {
      type: 'open',
      value: 36000,
    },
  ],
  saturday: [
    {
      type: 'close',
      value: 3600,
    },
    {
      type: 'open',
      value: 36000,
    },
  ],
  sunday: [
    {
      type: 'close',
      value: 3600,
    },
    {
      type: 'open',
      value: 43200,
    },
    {
      type: 'close',
      value: 75600,
    },
  ],
})

const fullWeekOutput = (): Item[] => [
  {
    caption: 'Monday',
    value: Closed,
    isGrey: true,
  },
  {
    caption: 'Tuesday',
    value: '10 AM - 6 PM',
  },
  {
    caption: 'Wednesday',
    value: Closed,
    isGrey: true,
  },
  {
    caption: 'Thursday',
    value: '10 AM - 6 PM',
  },
  {
    caption: 'Friday',
    value: '10 AM - 1 AM',
  },
  {
    caption: 'Saturday',
    value: '10 AM - 1 AM',
  },
  {
    caption: 'Sunday',
    value: '12 PM - 9 PM',
  },
]

describe('convert', () => {
  test('handle full week with next day closing', () => {
    expect(convert(fullWeekInput())).toStrictEqual(fullWeekOutput())
  })

  test('handle full week with multiple working periods', () => {
    const multipleInput: OpeningHour[] = [
      {
        type: 'open',
        value: 15840,
      },
      {
        type: 'close',
        value: 29580,
      },
      {
        type: 'open',
        value: 36000,
      },
      {
        type: 'close',
        value: 64800,
      },
    ]
    const multipleOutput: Item[] = [
      {
        caption: 'Monday',
        value: '4:24 AM - 8:13 AM',
      },
      {
        value: '10 AM - 6 PM',
      },
    ]
    const input = fullWeekInput()
    input.monday = multipleInput
    let output = fullWeekOutput()
    output = multipleOutput.concat(output.slice(1))
    expect(convert(input)).toStrictEqual(output)
  })

  test('for starting with close day ignores close', () => {
    const startWithClose: OpeningHour[] = [
      {
        type: 'close',
        value: 29580,
      },
      {
        type: 'open',
        value: 36000,
      },
      {
        type: 'close',
        value: 64800,
      },
    ]
    const outputWithClose: Item[] = [
      {
        caption: 'Monday',
        value: '10 AM - 6 PM',
      },
    ]
    const input = fullWeekInput()
    input.monday = startWithClose
    let output = fullWeekOutput()
    output = outputWithClose.concat(output.slice(1))
    expect(convert(input)).toStrictEqual(output)
  })

  test('for unordered open-close list return empty array', () => {
    const startWithClose: OpeningHour[] = [
      {
        type: 'open',
        value: 29580,
      },
      {
        type: 'open',
        value: 36000,
      },
      {
        type: 'close',
        value: 64800,
      },
    ]
    const input = fullWeekInput()
    input.monday = startWithClose
    expect(convert(input)).toStrictEqual([])
  })

  test('for ending with open last day return empty array', () => {
    const endWithOpen: OpeningHour[] = [
      {
        type: 'close',
        value: 3600,
      },
      {
        type: 'open',
        value: 43200,
      },
      {
        type: 'close',
        value: 75600,
      },
      {
        type: 'open',
        value: 78600,
      },
    ]

    const input = fullWeekInput()
    input.sunday = endWithOpen

    expect(convert(input)).toStrictEqual([])
  })

  test('for ending with open day and starting with open return empty array', () => {
    const endWithOpen: OpeningHour[] = [
      {
        type: 'close',
        value: 3600,
      },
      {
        type: 'open',
        value: 43200,
      },
      {
        type: 'close',
        value: 75600,
      },
      {
        type: 'open',
        value: 78600,
      },
    ]
    const startWithOpen: OpeningHour[] = [
      {
        type: 'open',
        value: 3600,
      },
      {
        type: 'close',
        value: 43200,
      },
      {
        type: 'open',
        value: 75600,
      },
      {
        type: 'close',
        value: 78600,
      },
    ]

    const input = fullWeekInput()
    input.monday = endWithOpen
    input.tuesday = startWithOpen

    expect(convert(input)).toStrictEqual([])
  })

  test('ignores only one close', () => {
    const input = fullWeekInput()
    input.friday = [{ type: 'close', value: 3600 }]
    const output = fullWeekOutput()
    output[4] = {
      caption: 'Friday',
      marker: Marker,
      isGrey: true,
      value: Closed,
    }
    expect(convert(input, 'friday')).toStrictEqual(output)
  })

  test('for today places marker', () => {
    const input = fullWeekInput()
    const output = fullWeekOutput()
    output[1] = {
      caption: 'Tuesday',
      marker: Marker,
      value: '10 AM - 6 PM',
    }
    expect(convert(input, 'tuesday')).toStrictEqual(output)
  })
})
