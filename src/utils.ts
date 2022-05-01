export const getDateFromNonStandardString = (text: string) => {
  const year = text.slice(0, 4)
  const month = text.slice(4, 6)
  const date = text.slice(6, 8)
  const hour = text.slice(8, 10)
  const minute = text.slice(10, 12)
  const second = text.slice(12, 14)

  return {
    year,
    month,
    date,
    hour,
    minute,
    second
  }
}
