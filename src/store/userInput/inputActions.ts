import { ADD_USER_INPUT, UPDATE_USER_INPUT, Input, InputAction } from './inputTypes'

export const addInput = (input: Input[]): InputAction => ({
  type: ADD_USER_INPUT,
  input
})

export const updateInput = (input: Input[]): InputAction => ({
  type: UPDATE_USER_INPUT,
  input
})