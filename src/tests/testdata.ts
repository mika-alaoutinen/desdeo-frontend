import { Coordinate, CoordinateSet } from 'desdeo-components/build/types/dataTypes'

import { Variable } from '../store/desdeo/desdeoTypes'

export const coordinates: Coordinate[] = [
  { id: 'a', x: 10, y: 20, label: 'A', isSelected: true },
  { id: 'b', x: 20, y: 40, label: 'B', isSelected: false },
  { id: 'c', x: 30, y: 70, label: 'C' },
  { id: 'd', x: 40, y: 30, label: 'D', isSelected: true },
  { id: 'e', x: 50, y: 50, label: 'E' },
]

export const coordinateSets: CoordinateSet[] = [
  {
    data: [
      { id: 'G', x: 1, y: 80, label: 'C', isSelected: true },
      { id: 'H', x: 2, y: 15, label: 'C', isSelected: true },
      { id: 'I', x: 3, y: 60, label: 'C', isSelected: true }
    ],
    label: 'dataset 3'
  },

  {
    data: [
      { id: 'd', x: 1, y: 10, label: 'B', isSelected: false },
      { id: 'e', x: 2, y: 15, label: 'B', isSelected: false },
      { id: 'f', x: 3, y: 60, label: 'B', isSelected: false }
    ],
    label: 'dataset 2'
  },

  {
    data: [
      { id: 'a', x: 1, y: 20, label: 'A', isSelected: true },
      { id: 'b', x: 2, y: 40, label: 'A', isSelected: false },
      { id: 'c', x: 3, y: 70, label: 'A' }
    ],
    label: 'dataset 1'
  }
]

export const testvariables: Variable[] = [
  { name: 'a', value: 15 },
  { name: 'b', value: 20 },
  { name: 'c', value: 25 },
]