import { Variable } from '../../store/desdeo/desdeoTypes'

export const createVariable = (variable: Variable): Variable => ({
  name: 'new1',
  value: variable.value + 5
})