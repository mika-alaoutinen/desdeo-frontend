import {
  ADD_PARAMETER, ADD_VARIABLE, DesdeoAction, DesdeoState, RUN_ITERATION, Variable
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

    default:
      return state
  }
}

export default desdeo