import {
  ADD_PARAMETERS, ADD_VARIABLES, DesdeoAction, DesdeoState, RUN_ITERATION
} from './desdeoTypes'

const initialState: DesdeoState = {
  variables: [],
  parameters: [],
  iteration: 0
}

const desdeo = (state: DesdeoState = initialState, action: DesdeoAction): DesdeoState => {
  switch (action.type) {

    case ADD_VARIABLES:
      return {
        ...state,
        variables: action.variables
      }

    case ADD_PARAMETERS:
      return {
        ...state,
        parameters: action.parameters
      }

    case RUN_ITERATION:
      return {
        ...state,
        iteration: state.iteration + 1
      }

    default:
      return state
  }
}

export default desdeo