import { createSelectorHook } from 'react-redux'

// Selector for the desdeo slice of store
export const useSelector = createSelectorHook<DesdeoState, DesdeoAction>()

// The shape of valid input data. These are placeholders.
export interface Variable {
  name: string,
  value: number
}

export interface Parameter {
  parameter: number
}

export interface Iteration {
  variables: Variable[],
  parameters: Parameter[],
  iteration: number
}

// Action names
export const ADD_VARIABLES = 'ADD_VARIABLES'
export const ADD_PARAMETERS = 'ADD_PARAMETERS'
export const RUN_ITERATION = 'RUN_ITERATION'

// Types for state and actions:
export type DesdeoState = Iteration
export type DesdeoAction = AddVariables | AddParameters | RunIteration

interface AddVariables {
  type: typeof ADD_VARIABLES,
  variables: Variable[]
}

interface AddParameters {
  type: typeof ADD_PARAMETERS,
  parameters: Parameter[]
}

interface RunIteration {
  type: typeof RUN_ITERATION,
  iteration: Iteration
}