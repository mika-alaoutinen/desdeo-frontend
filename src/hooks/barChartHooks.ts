import { Datum } from 'desdeo-components/build/types/dataTypes'

import { useSelector } from '../store/reduxTypes'
import { Variable } from '../store/desdeo/desdeoTypes'

export const useData = (): Datum[] =>
  useSelector(state => state.data)

export const useMaxVariable = (): Variable => {
  const variables = useSelector(state => state.desdeo.variables)
  const sorted = [...variables].sort((a, b) => b.value - a.value)
  return sorted[0]
}

export const useVariableValues = (): number[] => {
  const variables = useSelector(state => state.desdeo.variables)
  return variables.map(v => v.value)
}