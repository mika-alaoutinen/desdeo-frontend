import {
  ADD_PARAMETER, ADD_VARIABLE, REVERSE_VARIABLES, RUN_ITERATION,
  DesdeoAction, DesdeoState
} from './desdeoTypes'

const initialState: DesdeoState = {
  variables: [],
  parameters: [],
  iteration: 0
}

const desdeo = (state: DesdeoState = initialState, action: DesdeoAction): DesdeoState => {
  switch (action.type) {

    case ADD_VARIABLE:
      return {
        ...state,
        variables: state.variables.concat(action.variable)
      }

    case ADD_PARAMETER:
      return {
        ...state,
        parameters: state.parameters.concat(action.parameter)
      }

    case RUN_ITERATION:
      return {
        ...state,
        iteration: state.iteration + 1
      }
    
    case REVERSE_VARIABLES:
      return {
        ...state,
        variables: [...state.variables].reverse()
      }

    default:
      return state
  }
}

export default desdeo