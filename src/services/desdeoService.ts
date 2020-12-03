import { Iteration, Parameter, Variable } from '../store/desdeo/desdeoTypes'

// Placeholder functions
const addVariable = async (variable: Variable): Promise<Variable|void> =>
  Promise.resolve({
    ...variable,
    value: variable.value + 1
  })

const addParameters = async (params: Parameter[]): Promise<Parameter[]|void> =>
  Promise.resolve(params)

const getVariables = async (): Promise<Variable[]|void> =>
  Promise.resolve([
    { name: 'A', value: 10 },
    { name: 'B', value: 15 },
    { name: 'C', value: 20 },
  ])

const runIteration = async (iteration: Iteration): Promise<Iteration|void> =>
  Promise.resolve(iteration)

export default { addVariable, addParameters, getVariables, runIteration }