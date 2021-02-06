import { ADD_DATA, CLEAR_SELECTED, SELECT_DATA, SELECT_DATUM } from 'store/coordinates/coordinateTypes'
import { createData, createNewDatum } from 'tests/testUtils'

import { addData, clearSelected, selectData, selectDatum } from 'store/coordinates/coordinateActions'

describe('should create actions', () => {
  it('should create an action to add new data', () => {
    const data = createData()
    expect(addData(data)).toEqual({ type: ADD_DATA, data })
  })

  it ('should create an action to clear all selections', () => {
    expect(clearSelected()).toEqual({ type: CLEAR_SELECTED })
  })

  it('should create an action to select multiple datum', () => {
    const data = createData()
    expect(selectData(data)).toEqual({ type: SELECT_DATA, data })
  })

  it('should create an action to select a single datum', () => {
    const datum = createNewDatum()
    expect(selectDatum(datum)).toEqual({ type: SELECT_DATUM, datum })
  })
})