import {
  addCoordinates, clearSelected, selectCoordinate, selectCoordinates
} from 'store/coordinates/coordinateActions'
import { createData } from 'tests/testUtils'

import reducer from 'store/coordinates/coordinateReducer'

describe('Add coordinates action concatenates new coordinates to existing state', () => {
  it('new coordinates are added', () => {
    const data = createData()
    const action = addCoordinates(data)
    const state = reducer([], action)
    expect(state).toEqual(data)
  })
})

describe('Clear selected action sets isSelected property to false for all data', () => {
  it('isSelected is false for all coordinates', () => {
    const data = createData(true)
    const action = clearSelected()
    const state = reducer(data, action)
    state.forEach(coordinate => expect(coordinate.isSelected).toBe(false))
  })
})

describe('Selected coordinates action sets isSelected property true for all selected coordinates', () => {
  it('sets isSelected to true', () => {
    const data = createData(false)
    const action = selectCoordinates(data.slice(0, 1))
    const state = reducer(data, action)
    expect(state[0].isSelected).toBe(true)
    expect(state[1].isSelected).toBeFalsy()
  })
})

describe('Select coordinate action edits isSelected property of a single coordinate', () => {
  const testSelectCoordinate = (isSelected: boolean | undefined): void => {
    const data = createData(isSelected)
    const action = selectCoordinate(data[0])
    const state = reducer(data, action)
    expect(state[0].isSelected).toBe(!isSelected)
    expect(state[1].isSelected).toBeFalsy()
  }

  it('if isSelected is true, set it to false', () => {
    testSelectCoordinate(true)
  })

  it('if isSelected is false, set it to true', () => {
    testSelectCoordinate(false)
  })

  it('if isSelected is undefined, set it to true', () => {
    testSelectCoordinate(undefined)
  })
})

describe('Returns current state by default when an invalid action was performed', () => {
  it('returns current state by default', () => {
    const data = createData(false)
    const state = reducer(data, {})
    expect(state).toEqual(data)
  })
})