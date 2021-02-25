import { DataSet, Value } from 'data/dataTypes'
import { addDataset, selectDatum } from 'store/dataset/datasetActions'
import { dataset } from 'tests/store/dataset/testUtils'

import reducer from 'store/dataset/datasetReducer'

describe('Add dataset action concatenates new dataset to existing state', () => {
  it('new dataset is added', () => {
    const newDataset: DataSet[] = [
      {
        label: 'new dataset',
        data: [{ id: '10', isSelected: false, value: 10 }],
      },
    ]

    const action = addDataset(newDataset)
    const state = reducer([], action)
    expect(state).toEqual(newDataset)
  })
})

describe('Select datum action does nothing for now', () => {
  it('returns the current state unchanged', () => {
    const value: Value = {
      id: 'a1',
      isSelected: false,
      value: 1,
    }

    const expectedState: DataSet[] = [
      {
        label: 'Label A',
        data: [
          { id: 'a1', isSelected: true, value: 1 },
          { id: 'a2', isSelected: false, value: 2 },
          { id: 'a3', isSelected: false, value: 3 },
        ],
      },
      {
        label: 'Label B',
        data: [
          { id: 'b1', isSelected: false, value: 4 },
          { id: 'b2', isSelected: false, value: 5 },
          { id: 'b3', isSelected: false, value: 6 },
        ],
      },
    ]

    const action = selectDatum(value)
    const state = reducer(dataset, action)
    expect(state).toEqual(expectedState)
  })
})
