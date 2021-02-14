import { ADD_DATASET, SELECT_DATUM } from 'store/dataset/datasetTypes'
import { createCoordinate } from 'tests/store/coordinates/testUtils'
import { dataset } from 'tests/store/dataset/testUtils'

import { addDataset, selectDatum } from 'store/dataset/datasetActions'

describe('Should create actions', () => {
  it('should create an action to add a new dataset', () => {
    expect(addDataset(dataset)).toEqual({ type: ADD_DATASET, data: dataset })
  })

  it('should create an action to select a coordinate', () => {
    const datum = createCoordinate()
    expect(selectDatum(datum)).toEqual({ type: SELECT_DATUM, datum })
  })
})