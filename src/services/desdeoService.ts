import { Iteration, Parameter, Variable } from '../store/desdeo/desdeoTypes'

// Placeholder functions that simulate DESDEO's backend API
const addVariable = async (variable: Variable): Promise<Variable|void> => {
  const value = variable.value + 5
  const name = `new-${value}`
  return Promise.resolve({ name, value })
}

const addParameter = async (param: Parameter): Promise<Parameter|void> =>
  Promise.resolve(param)

const getVariables = async (): Promise<Variable[]|void> =>
  Promise.resolve([
    { name: 'A', value: 10 },
    { name: 'B', value: 15 },
    { name: 'C', value: 20 },
  ])

const runIteration = async (iteration: Iteration): Promise<Iteration|void> =>
  Promise.resolve(iteration)

export default { addVariable, addParameters: addParameter, getVariables, runIteration }