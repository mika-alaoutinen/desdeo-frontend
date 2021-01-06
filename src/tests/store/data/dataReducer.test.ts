import { Datum } from 'desdeo-components/build/types/dataTypes'

import { testdata } from '../../testdata'
import {
  addData
} from '../../../store/data/dataActions'

import reducer, {
  addDataReduce, clearSelectedReduce, selectDataReduce, selectDatumReduce
} from '../../../store/data/dataReducer'

describe('dataReducer calls correct functions with actions', () => {
  it('new data is added to state', () => {
    const data = createData()
    const action = addData(data)
    const state = reducer([], action)
    expect(state).toEqual(data)
  })
})

describe('addData concatenates to existing data array', () => {
  it('new data is concatenated to array', () => {
    const data = createData()
    const newDatum = [createNewDatum()]
    const newData = addDataReduce(newDatum, data)
    const expectedData = data.concat(newDatum)
    expect(newData).toMatchObject(expectedData)
  })
})

describe('clearSelected sets property isSelected to false', () => {
  it('isSelected is false for all data', () => {
    expect(testdata[0].isSelected).toBe(true)
    const unselected = clearSelectedReduce(testdata)
    unselected.forEach(datum =>
      expect(datum.isSelected).toBe(false))
  })
})

describe('selectData sets property isSelected to true for all selected data', () => {
  it('isSelected is set to true', () => {
    const data = createData()
    const selected = data.slice(0, 1)
    const edited = selectDataReduce(selected, data)
    expect(edited[0].isSelected).toBe(true)
    expect(edited[1].isSelected).toBe(false)
  })

  it('data is not changed if a datum with a new ID is somehow given as selected', () => {
    const data = createData()
    const invalid = [createNewDatum()]
    const edited = selectDataReduce(invalid, data)
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
    const invalid = createNewDatum()
    const edited = selectDatumReduce(invalid, data)
    expect(edited).toMatchObject(data)
  })
})

// Testing functions
const testSelectDatum = (isSelected?: boolean): void => {
  const data = createData(isSelected)
  const edited = selectDatumReduce(data[0], data)
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

const createNewDatum = (): Datum => ({
  id: '10',
  x: 0,
  y: 0
})