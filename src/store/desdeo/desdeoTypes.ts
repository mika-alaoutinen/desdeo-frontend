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
export const REVERSE_VARIABLES = 'REVERSE_VARIABLES'
export const UPDATE_VARIABLES = 'UPDATE_VARIABLES'

export const ADD_PARAMETER = 'ADD_PARAMETER'
export const UPDATE_PARAMETERS = 'UPDATE_PARAMETERS'

export const RUN_ITERATION = 'RUN_ITERATION'

// Types for state and actions:
export type DesdeoState = Iteration
export type DesdeoAction =
  | AddVariable
  | UpdateVariables
  | AddParameter
  | UpdateParameters
  | RunIteration
  | ReverseVariables

interface AddVariable {
  type: typeof ADD_VARIABLE,
  variable: Variable
}

interface ReverseVariables {
  type: typeof REVERSE_VARIABLES
}

interface UpdateVariables {
  type: typeof UPDATE_VARIABLES,
  variables: Variable[]
}

interface AddParameter {
  type: typeof ADD_PARAMETER,
  parameter: Parameter
}

interface UpdateParameters {
  type: typeof UPDATE_PARAMETERS,
  parameters: Parameter[]
}

interface RunIteration {
  type: typeof RUN_ITERATION,
  iteration: Iteration
}