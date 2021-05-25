const reducer = (acc, value) => acc + value

export const parsePrice = (string) => parseFloat(string)

export const parseTotalPrice = (items) => {
  if (!items.length) return "0.00"
  return items.reduce(reducer).toFixed(2);
};