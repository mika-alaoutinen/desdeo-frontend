// Input received from the user via the web UI.

// Primitive types
export type Input = number

// Types for state and actions:
export type InputState = number[]
export type InputAction = GetInputs | UpdateInputs

// Action names
export const GET_INPUTS = 'GET_INPUTS'
export const UPDATE_INPUTS = 'UPDATE_INPUTS'

// Private action definitions
interface UpdateInputs {
  type: typeof UPDATE_INPUTS,
  inputs: Input[]
}

interface GetInputs {
  type: typeof GET_INPUTS,
  inputs: Input[]
}