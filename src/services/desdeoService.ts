import { Iteration, Parameter, Variable } from '../store/desdeo/desdeoTypes'
import { testvariables } from '../tests/testdata'

// Placeholder functions that simulate DESDEO's backend API
const addVariable = async (variable: Variable): Promise<Variable|void> => {
  const value = variable.value + 5
  const name = `new-${value}`
  return Promise.resolve({ name, value })
}

const addParameter = async (param: Parameter): Promise<Parameter|void> =>
  Promise.resolve(param)

const getVariables = async (): Promise<Variable[]|void> =>
  Promise.resolve(testvariables)

const runIteration = async (iteration: Iteration): Promise<Iteration|void> =>
  Promise.resolve(iteration)

export default {
  addVariable, addParameters: addParameter, getVariables, runIteration
}