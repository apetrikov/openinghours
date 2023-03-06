import {capitalize, seconds2HH} from "../../helpers";

const daysOrder: Days[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']


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

function isOrdered(hours: OpeningHour[]): boolean {
    return hours.every((el, i, arr) => el.type !== arr[i + 1]?.type)
}

export function convert(input: Input, localDay?: Days): Item[] {
    let items: Item[] = []

    for (let i = 0; i < daysOrder.length; i++) {
        let day = daysOrder[i]
        const isToday = day === localDay
        const marker = isToday ? 'TODAY' : undefined
        let currentHours: OpeningHour[] = [...input[day]]

        if (currentHours.length === 0) {
            const item: Item = {
                caption: capitalize(day),
                value: 'Closed',
                isGrey: true,
            }
            if (marker) item.marker = marker
            items.push(item)
            continue
        }
        if (currentHours[0].type === 'close') currentHours = currentHours.slice(1)
        if (!isOrdered(currentHours)) return [] // log error, return []
        if (currentHours[currentHours.length - 1].type === 'close') {
            const res: Item[] = evenToItems(currentHours)
            res[0].caption = capitalize(day)
            if (marker) res[0].marker = marker
            items.push(...res)
            continue
        }

        const isLastDay: boolean = i === daysOrder.length - 1
        if (isLastDay) return [] // log error, list is open!

        const firstTimeNextDay = input[daysOrder[i + 1]][0]
        if (!firstTimeNextDay) return [] // log error
        if (firstTimeNextDay.type !== 'close') return [] // log error

        const res: Item[] = evenToItems(currentHours.concat(firstTimeNextDay))
        res[0].caption = capitalize(day)
        if (marker) res[0].marker = marker
        items.push(...res)
    }

    return items
}