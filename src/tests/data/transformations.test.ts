import { createDataSet } from 'data/transformations'
import { DataSet, InputDataSet } from 'misc/dataTypes'

describe('createDataSet maps input into a DataSet with labels and Values', () => {
  const input: InputDataSet = [
    { label: 'Set A', data: [1, 2] },
    { label: 'Set B', data: [3, 4] },
  ]

  it('maps data as expected', () => {
    const expected: DataSet[] = [
      {
        label: 'Set A',
        data: [
          { id: 'set-a-0', isSelected: false, value: 1 },
          { id: 'set-a-1', isSelected: false, value: 2 },
        ],
      },
      {
        label: 'Set B',
        data: [
          { id: 'set-b-0', isSelected: false, value: 3 },
          { id: 'set-b-1', isSelected: false, value: 4 },
        ],
      },
    ]
    expect(createDataSet(input)).toEqual(expected)
  })

  it('handles an empty input', () => {
    expect(createDataSet([])).toEqual([])
  })
})
