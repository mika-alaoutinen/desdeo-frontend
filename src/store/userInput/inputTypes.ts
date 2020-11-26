// The shape of a valid input. This is placeholder.
export type Input = number

// Action names
export const ADD_USER_INPUT = 'ADD_USER_INPUT'
export const UPDATE_USER_INPUT = 'UPDATE_USER_INPUT'

// Types for state and actions:
export type InputState = Input[]
export type InputAction = AddInput | UpdateInput

interface AddInput {
  type: typeof ADD_USER_INPUT,
  input: Input[]
}

interface UpdateInput {
  type: typeof UPDATE_USER_INPUT,
  input: Input[]
}