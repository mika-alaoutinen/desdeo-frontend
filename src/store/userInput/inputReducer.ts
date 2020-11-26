import {
  ADD_USER_INPUT, UPDATE_USER_INPUT, InputAction, InputState
} from './inputTypes'

const input = (state: InputState = [], action: InputAction): InputState => {
  switch (action.type) {

    case ADD_USER_INPUT:
      return state.concat(action.input)

    case UPDATE_USER_INPUT:
      return action.input

    default:
      return state
  }
}

export default input