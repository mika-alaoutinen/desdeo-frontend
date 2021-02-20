import { DataSet, InputDataSet, Value } from 'misc/dataTypes'

export const createDataSet = (input: InputDataSet): DataSet[] =>
  input.map(({ data, label }) => ({
    label,
    data: createValues(data, label),
  }))

const createValues = (values: number[], label: string): Value[] =>
  values.map((value, i) => ({
    id: createId(label, i),
    isSelected: false,
    value,
  }))

const createId = (label: string, n: number): string => {
  const hyphenated = label.toLowerCase().replace(/ /g, '-')
  return `${hyphenated}-${n}`
}
