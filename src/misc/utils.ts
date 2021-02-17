export const createId = (label: string, n: number): string => {
  const hyphenated = label.toLowerCase().replace(/ /g, '-')
  return `${hyphenated}-${n}`
}