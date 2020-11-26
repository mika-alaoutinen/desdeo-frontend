import { Iteration, Parameter, Variable } from '../store/desdeo/desdeoTypes'

// Placeholder functions
const addVariables = async (input: Variable[]): Promise<Variable[]|void> =>
  Promise.resolve(modifyInput(input))

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

// Temp function for returning mock data from 'backend'
const modifyInput = (input: Variable[]): Variable[] =>
  input.map(i => ({
    ...i,
    value: i.value++
  }))

export default { addVariables, addParameters, getVariables, runIteration }