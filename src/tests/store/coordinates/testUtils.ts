import { Coordinate } from 'misc/dataTypes'

const createCoordinates = (isSelected?: boolean): Coordinate[] => [
  {
    id: '1',
    label: 'A',
    isSelected,
    x: 1,
    y: 1
  },
  {
    id: '2',
    label: 'B',
    isSelected: false,
    x: 2,
    y: 2
  }
]

const createCoordinate = (): Coordinate => ({
  id: '10',
  x: 0,
  y: 0
})

export { createCoordinate, createCoordinates }