import { Datum } from 'desdeo-components/build/types/dataTypes'
import {
  clearSelected, selectData, selectDatum
} from '../../../store/data/dataReducer'
import { testdata } from '../../testdata'

describe('clearSelected sets property isSelected to false', () => {
  it('isSelected is false for all data', () => {
    expect(testdata[0].isSelected).toBe(true)
    const unselected = clearSelected(testdata)
    unselected.forEach(datum =>
      expect(datum.isSelected).toBe(false))
  })
})

describe('selectData sets property isSelected to true for all selected data', () => {
  it('isSelected is set to true', () => {
    const data = createData()
    const selected = [data[0]]
    const edited = selectData(selected, data)
    expect(edited[0].isSelected).toBe(true)
    expect(edited[1].isSelected).toBe(false)
  })
})

describe('selectDatum reverses isSelected property\'s value', () => {
  it('if isSelected is undefined, set it to true', () => {
    const data = createData()
    const edited = selectDatum(data[0], data)
    expect(edited[0].isSelected).toBe(true)
  })

  it ('if isSelected is false, set it to true', () => {
    const data = createData(false)
    const edited = selectDatum(data[0], data)
    expect(edited[0].isSelected).toBe(true)
  })

  it ('if isSelected is true, set it to false', () => {
    const data = createData(true)
    const edited = selectDatum(data[0], data)
    expect(edited[0].isSelected).toBe(false)
  })
})

const createData = (isSelected?: boolean): Datum[] => [
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