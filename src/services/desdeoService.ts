import { Input } from '../store/input/inputTypes'

// Placeholder functions
const getInputs = async (): Promise<Input[]|void> =>
  Promise.resolve([10, 15, 20])

export default { getInputs }