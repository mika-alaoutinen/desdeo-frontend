import {
  ADD_COORDINATES,
  CLEAR_SELECTED,
  SELECT_COORDINATES,
  SELECT_COORDINATE,
} from 'store/coordinates/coordinateTypes'
import { createCoordinates, createCoordinate } from 'tests/store/coordinates/testUtils'

import {
  addCoordinates,
  clearSelected,
  selectCoordinate,
  selectCoordinates,
} from 'store/coordinates/coordinateActions'

describe('Should create actions', () => {
  it('should create an action to add new data', () => {
    const data = createCoordinates()
    expect(addCoordinates(data)).toEqual({ type: ADD_COORDINATES, data })
  })

  it('should create an action to clear all selections', () => {
    expect(clearSelected()).toEqual({ type: CLEAR_SELECTED })
  })

  it('should create an action to select multiple datum', () => {
    const data = createCoordinates()
    expect(selectCoordinates(data)).toEqual({ type: SELECT_COORDINATES, data })
  })

  it('should create an action to select a single datum', () => {
    const datum = createCoordinate()
    expect(selectCoordinate(datum)).toEqual({ type: SELECT_COORDINATE, datum })
  })
})
