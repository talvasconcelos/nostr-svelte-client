import prettydate from 'pretty-date'

export const humanDate = (d) => {
    if (typeof d === "number") d = new Date(d * 1000);
    return d && prettydate.format(d);
}
export const abbr = (pubkey) => {
    return `${pubkey.slice(0, 4)}…${pubkey.slice(-4)}`
}