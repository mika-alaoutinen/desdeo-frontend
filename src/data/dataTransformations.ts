import { Coordinate, CoordinateSet, DataSet } from './dataTypes'

// Corresponds to groupedByAlternatives
const createAlternativeSets = (dataset: DataSet): CoordinateSet[] =>
  dataset.map(({ data, label }) => {
    const coordinates = data.map((value, i) => createCoordinate(label, i + 1, value))
    return { data: coordinates }
  })

// Corresponds to groupedByCriteria
const createCriteriaSets = (dataset: DataSet): CoordinateSet[] =>
  dataset[0].data.map((_, columnIndex) => {
    const coordinates = dataset.map((row, rowIndex) => {
      return {
        id: createId(row.label, columnIndex + 1),
        x: rowIndex + 1,
        y: row.data[columnIndex]
      }
    })
    return { data: coordinates }
  })

// Utility functions
const createCoordinate = (label: string, x: number, y: number): Coordinate => ({
  id: createId(label, x),
  x,
  y
})

const createId = (label: string, n: number): string => {
  const hyphenated = label.toLowerCase().replace(/ /g, '-')
  return `${hyphenated}-${n}`
}

export {
  createAlternativeSets, createCriteriaSets
}