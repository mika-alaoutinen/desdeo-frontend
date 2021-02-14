import { DataSet } from 'misc/dataTypes'
import { addDataset, selectDatum } from 'store/dataset/datasetActions'
import { dataset } from 'tests/store/dataset/testUtils'
import { createCoordinate } from 'tests/store/coordinates/testUtils'

import reducer from 'store/dataset/datasetReducer'

describe('Add dataset action concatenates new dataset to existing state', () => {
  it('new dataset is added', () => {
    const newDataset: DataSet = [
      { label: 'new dataset', data: [ 10 ] }
    ]

    const action = addDataset(newDataset)
    const state = reducer([], action)
    expect(state).toEqual(newDataset)
  })
})

describe('Select datum action does nothing for now', () => {
  it('returns the current state unchanged', () => {
    const action = selectDatum(createCoordinate())
    const state = reducer(dataset, action)
    expect(state).toEqual(dataset)
  })
})