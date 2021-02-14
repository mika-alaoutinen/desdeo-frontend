import { Coordinate, DataSet } from 'misc/dataTypes'
import { ADD_DATASET, SELECT_DATUM, DatasetAction, DatasetState } from './datasetTypes'

const dataset = (state: DatasetState = [], action: DatasetAction): DatasetState => {
  switch (action.type) {

    case ADD_DATASET:
      return state.concat(action.data)

    // TODO: map selection?
    case SELECT_DATUM:
      return selectSet(action.datum, state)

    default:
      return state
  }
}

const selectSet = (clicked: Coordinate, state: DataSet): DatasetState => {
  console.log('clicked', clicked)
  return state
}

export default dataset