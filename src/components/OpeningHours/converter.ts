import {capitalize, seconds2HH} from "../../helpers";

const daysOrder: Days[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

function removeFirstClose(hours: OpeningHour[]): OpeningHour[] {
    if (hours[0]?.type === 'close') return hours.slice(1)
    return hours
}

// TODO removeLastClose if no next element !!!

function evenToItems(hours: OpeningHour[]): Item[] {
    const items: Item[] = []
    for (let i = 0; i < hours.length; i += 2) {
        const open = hours[i]
        const close = hours[i + 1]

        items.push({
            value: `${seconds2HH(open.value)} - ${seconds2HH(close.value)}`,
        })
    }

    return items
}

export function convert(input: Input): Item[] {
    return daysOrder.reduce((acc, curr, i, arr): Item[] => {
        let hours: OpeningHour[] = removeFirstClose(input[curr])

        if (hours.length === 0) return acc.concat({
            caption: capitalize(curr),
            value: 'Closed',
            isGrey: true
        })

        if (hours.length % 2 === 1) {
            const nextClose = input[arr[i + 1]][0]
            hours.push(nextClose)
        }

        const items: Item[] = evenToItems(hours)
        items[0].caption = capitalize(curr)


        return acc.concat(items)
    }, [] as Item[])
}