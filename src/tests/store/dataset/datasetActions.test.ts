import { ADD_DATASET, SELECT_DATUM } from 'store/dataset/datasetTypes'
import { dataset } from 'tests/store/dataset/testUtils'

import { addDataset, selectDatum } from 'store/dataset/datasetActions'
import { Value } from 'desdeo-components/build/types/dataTypes'

describe('Should create actions', () => {
  it('should create an action to add a new dataset', () => {
    expect(addDataset(dataset)).toEqual({ type: ADD_DATASET, data: dataset })
  })

  it('should create an action to select a Value', () => {
    const datum: Value = {
      id: '1',
      isSelected: false,
      value: 1,
    }
    expect(selectDatum(datum)).toEqual({ type: SELECT_DATUM, datum })
  })
})
