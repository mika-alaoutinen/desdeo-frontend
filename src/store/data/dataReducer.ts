import { Datum } from 'desdeo-components/build/types/dataTypes'
import {
  ADD_DATA, SELECT_DATA, SELECT_DATUM, DataAction, DataState
} from './dataTypes'

const data = (state: DataState = [], action: DataAction): DataState => {
  switch (action.type) {

    case ADD_DATA:
      return state.concat(action.data)

    case SELECT_DATA:
      return editSelectedData(action.data, state)

    case SELECT_DATUM:
      return state.map(datum =>
        datum.id === action.datum.id ? action.datum : datum)

    default:
      return state
  }
}

const editSelectedData = (selected: Datum[], data: Datum[]): Datum[] => {
  const selectedIDs = selected.map(datum => datum.id)
  return data.map(datum => selectedIDs.includes(datum.id)
    ? {
      ...datum,
      isSelected: true
    }
    : datum
  )
}

export default data