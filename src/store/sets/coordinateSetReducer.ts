import {
  ADD_SETS, SELECT_SET, SetAction, SetState
} from './coordinateSetTypes'

const sets = (state: SetState = [], action: SetAction): SetState => {
  switch (action.type) {

    case ADD_SETS:
      return state.concat(action.data)

    // TODO: map selection?
    case SELECT_SET:
      return state

    default:
      return state
  }
}

export default sets