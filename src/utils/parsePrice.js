const reducer = (acc, value) => acc + value

export const parsePrice = (string) => parseFloat(string)

export const parseTotalPrice = (items) => items.reduce(reducer).toFixed(2);