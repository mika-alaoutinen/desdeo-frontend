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
    const selected = data.slice(0, 1)
    const edited = selectData(selected, data)
    expect(edited[0].isSelected).toBe(true)
    expect(edited[1].isSelected).toBe(false)
  })

  it('data is not changed if a datum with a new ID is somehow given as selected', () => {
    const data = createData()
    const invalid = [createNonExistingDatum()]
    const edited = selectData(invalid, data)
    expect(edited).toMatchObject(data)
  })
})

describe('selectDatum reverses isSelected property\'s value', () => {
  it('if isSelected is undefined, set it to true', () => {
    testSelectDatum()
  })

  it ('if isSelected is false, set it to true', () => {
    testSelectDatum(false)
  })

  it ('if isSelected is true, set it to false', () => {
    testSelectDatum(true)
  })

  it('data is not changed if a datum with a new ID is somehow given as selected', () => {
    const data = createData()
    const invalid = createNonExistingDatum()
    const edited = selectDatum(invalid, data)
    expect(edited).toMatchObject(data)
  })
})

// Testing functions
const testSelectDatum = (isSelected?: boolean): void => {
  const data = createData(isSelected)
  const edited = selectDatum(data[0], data)
  expect(edited[0].isSelected).toBe(!isSelected)
}

// Utility functions
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

const createNonExistingDatum = (): Datum => ({
  id: '-1',
  x: 0,
  y: 0
})