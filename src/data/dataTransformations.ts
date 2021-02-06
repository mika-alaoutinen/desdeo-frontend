import { Coordinate, CoordinateSet, DataSet } from './dataTypes'

// Corresponds to groupedByAlternatives
const createAlternativeSets = (dataset: DataSet): CoordinateSet[] =>
  dataset.map(({ data, label }) => {
    const coordinates = data.map((value, i) => createCoordinate(label, i + 1, value))
    return { data: coordinates }
  })

// Corresponds to groupedByCriteria
const createCriteriaSets = (data: DataSet): CoordinateSet[] => {
  return []
}

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