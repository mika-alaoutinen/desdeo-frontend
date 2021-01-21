import { REVERSE_VARIABLES, DesdeoAction } from './desdeoTypes'

const reverseVariables = (): DesdeoAction => ({
  type: REVERSE_VARIABLES
})

export { reverseVariables }