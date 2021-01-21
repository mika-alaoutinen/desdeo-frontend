import { ADD_USER_INPUT, UPDATE_USER_INPUT, Input, InputAction } from './inputTypes'

const addInput = (input: Input[]): InputAction => ({
  type: ADD_USER_INPUT,
  input
})

const updateInput = (input: Input[]): InputAction => ({
  type: UPDATE_USER_INPUT,
  input
})

export { addInput, updateInput }