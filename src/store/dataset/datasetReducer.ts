import { Value } from 'data/dataTypes'
import { ADD_DATASET, SELECT_DATA, SELECT_DATUM, DatasetAction, DatasetState } from './datasetTypes'

const dataset = (state: DatasetState = [], action: DatasetAction): DatasetState => {
  switch (action.type) {
    case ADD_DATASET:
      return state.concat(action.data)

    case SELECT_DATA:
      return state.map(column => {
        const selectedIDs = action.data.map(selected => selected.id)
        return {
          ...column,
          data: column.data.map(value =>
            selectedIDs.includes(value.id) ? setSelected(value, !value.isSelected) : value
          ),
        }
      })

    case SELECT_DATUM:
      return state.map(column => {
        const data = column.data.map(value =>
          value.id === action.datum.id ? editSelected(action.datum) : value
        )
        return { ...column, data }
      })

    default:
      return state
  }
}

const editSelected = (value: Value): Value =>
  value.isSelected === undefined ? setSelected(value, true) : setSelected(value, !value.isSelected)

const setSelected = (value: Value, isSelected: boolean): Value => ({
  ...value,
  isSelected,
})

export default dataset
