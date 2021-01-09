import { Datum } from 'desdeo-components/build/types/dataTypes'

export const createData = (isSelected?: boolean): Datum[] => [
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