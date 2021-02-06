import { addData, clearSelected, selectData, selectDatum } from 'store/coordinates/coordinateActions'
import { createData, createNewDatum } from 'tests/testUtils'

import reducer, {
  addDataReduce, clearSelectedReduce, selectDataReduce, selectDatumReduce
} from 'store/coordinates/coordinateReducer'

// Testing the reducer
describe('coordinatesReducer manages state correctly', () => {
  it('addData concatenates to state', () => {
    const data = createData()
    const action = addData(data)
    const state = reducer([], action)
    expect(state).toEqual(data)
  })

  it('clearSelected sets isSelected property to false for all data', () => {
    const data = createData(true)
    const action = clearSelected()
    const state = reducer(data, action)
    state.forEach(datum => expect(datum.isSelected).toBe(false))
  })

  it('selectData sets isSelected property to true', () => {
    const data = createData(false)
    const action = selectData(data.slice(0, 1))
    const state = reducer(data, action)
    expect(state[0].isSelected).toBe(true)
    expect(state[1].isSelected).toBeFalsy()
  })

  it('selectDatum sets isSelected property true for a single datum', () => {
    const data = createData(false)
    const action = selectDatum(data[0])
    const state = reducer(data, action)
    expect(state[0].isSelected).toBe(true)
    expect(state[1].isSelected).toBeFalsy()
  })
})

// Testing the reducer's helper functions
describe('addData concatenates to existing data array', () => {
  it('new data is concatenated to array', () => {
    const data = createData()
    const newDatum = [createNewDatum()]
    const newData = addDataReduce(newDatum, data)
    const expectedData = data.concat(newDatum)
    expect(newData).toMatchObject(expectedData)
  })
})

describe('clearSelected sets property isSelected to false for all data', () => {
  it('isSelected is false for all data', () => {
    const data = createData(true)
    const unselected = clearSelectedReduce(data)
    unselected.forEach(datum => expect(datum.isSelected).toBe(false))
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