import {
  ADD_PARAMETERS, ADD_VARIABLES, DesdeoAction, DesdeoState, RUN_ITERATION, Variable
} from './desdeoTypes'

// Example data
const initVariables = (): Variable[] => [
  { name: 'a', value: 15 },
  { name: 'b', value: 20 },
  { name: 'c', value: 25 },
]

const initialState: DesdeoState = {
  variables: initVariables(),
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