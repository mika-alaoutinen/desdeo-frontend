import {
  addCoordinates, clearSelected, selectCoordinate, selectCoordinates
} from 'store/coordinates/coordinateActions'
import { createData } from 'tests/testUtils'

import reducer from 'store/coordinates/coordinateReducer'

// Testing the reducer
describe('coordinatesReducer manages state correctly', () => {
  it('addData concatenates to state', () => {
    const data = createData()
    const action = addCoordinates(data)
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
    const action = selectCoordinates(data.slice(0, 1))
    const state = reducer(data, action)
    expect(state[0].isSelected).toBe(true)
    expect(state[1].isSelected).toBeFalsy()
  })

  it('selectDatum sets isSelected property true for a single datum', () => {
    const data = createData(false)
    const action = selectCoordinate(data[0])
    const state = reducer(data, action)
    expect(state[0].isSelected).toBe(true)
    expect(state[1].isSelected).toBeFalsy()
  })
})