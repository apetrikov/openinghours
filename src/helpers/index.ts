export function capitalize(str: string): string {
    if (!str.length) return str
    return str[0].toUpperCase() + str.slice(1)
}

export function seconds2HH(seconds: number): string {
    let hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const ampm = hours < 12 ? 'AM' : 'PM';
    hours = (hours % 12) || 12;
    let time: string = `${hours}`
    if (minutes) time += `:${minutes}`

    return `${time} ${ampm}`
}