const reducer = (acc, value) => acc + value

export const parsePrice = (string) => parseFloat(string)

export const parseTotalPrice = (items) => {
  return items.reduce(reducer).toFixed(2);
};