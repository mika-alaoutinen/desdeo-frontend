import { Coordinate } from 'desdeo-components/build/types/dataTypes'

import { Variable } from '../store/desdeo/desdeoTypes'

export const testdata: Coordinate[] = [
  { id: 'a', x: 10, y: 20, label: 'A', isSelected: true },
  { id: 'b', x: 20, y: 40, label: 'B', isSelected: false },
  { id: 'c', x: 30, y: 70, label: 'C' },
  { id: 'd', x: 40, y: 30, label: 'D', isSelected: true },
  { id: 'e', x: 50, y: 50, label: 'E' },
]

export const testvariables: Variable[] = [
  { name: 'a', value: 15 },
  { name: 'b', value: 20 },
  { name: 'c', value: 25 },
]