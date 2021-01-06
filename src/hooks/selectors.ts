import { Datum } from 'desdeo-components/build/types/dataTypes'
import { useSelector } from '../store/reduxTypes'

export const useData = (): Datum[] =>
  useSelector(state => state.data)