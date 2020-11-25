import { GET_INPUTS, UPDATE_INPUTS, InputAction, InputState } from './inputTypes'

const input = (state: InputState = [], action: InputAction): InputState => {
  switch (action.type) {
    case GET_INPUTS:
      return action.inputs
    case UPDATE_INPUTS:
      return action.inputs
    default:
      return state
  }
}

export default input