import { DataAction } from 'store/coordinates/coordinateTypes'
import { ADD_DATA, CLEAR_SELECTED, SELECT_DATA, SELECT_DATUM } from 'store/coordinates/coordinateTypes'
import { createData, createNewDatum } from 'tests/testUtils'

import {
  addData, clearSelected, selectData, selectDatum
} from 'store/coordinates/coordinateActions'

describe('should create actions', () => {
  it('should create an action to add new data', () => {
    const data = createData()
    const expectedAction: DataAction = {
      type: ADD_DATA,
      data
    }
    expect(addData(data)).toEqual(expectedAction)
  })

  it ('should create an action to clear all selections', () => {
    const expectedAction: DataAction = {
      type: CLEAR_SELECTED
    }
    expect(clearSelected()).toEqual(expectedAction)
  })

  it('should create an action to select multiple datum', () => {
    const data = createData()
    const expectedAction: DataAction = {
      type: SELECT_DATA,
      data
    }
    expect(selectData(data)).toEqual(expectedAction)
  })

  it('should create an action to select a single datum', () => {
    const datum = createNewDatum()
    const expectedAction: DataAction = {
      type: SELECT_DATUM,
      datum
    }
    expect(selectDatum(datum)).toEqual(expectedAction)
  })
})