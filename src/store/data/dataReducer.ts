import {
  ADD_DATA, SELECT_DATA, SELECT_DATUM, DataAction, DataState
} from './dataTypes'

const data = (state: DataState = [], action: DataAction): DataState => {
  switch (action.type) {

    case ADD_DATA:
      return state.concat(action.data)

    case SELECT_DATA:
      return action.data

    case SELECT_DATUM:
      return state.map(datum =>
        datum.id === action.datum.id ? action.datum : datum)

    default:
      return state
  }
}

export default data