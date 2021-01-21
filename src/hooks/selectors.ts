import { Coordinate } from 'desdeo-components/build/types/dataTypes'
import { useSelector } from '../store/reduxTypes'

export const useData = (): Coordinate[] =>
  useSelector(state => state.coordinates)