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
export const ADD_VARIABLE = 'ADD_VARIABLE'
export const ADD_PARAMETER = 'ADD_PARAMETER'
export const RUN_ITERATION = 'RUN_ITERATION'

// Types for state and actions
export type DesdeoState = Iteration
export type DesdeoAction =
  | AddVariable
  | AddParameter
  | RunIteration

interface AddVariable {
  type: typeof ADD_VARIABLE,
  variable: Variable
}

interface AddParameter {
  type: typeof ADD_PARAMETER,
  parameter: Parameter
}

interface RunIteration {
  type: typeof RUN_ITERATION,
  iteration: Iteration
}