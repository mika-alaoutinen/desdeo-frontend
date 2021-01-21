import { Coordinate, CoordinateSet } from 'desdeo-components/build/types/dataTypes'
import { useSelector } from '../store/reduxTypes'

const useCoordinates = (): Coordinate[] =>
  useSelector(state => state.coordinates)

const useCoordinateSets = (): CoordinateSet[] =>
  useSelector(state => state.sets)

const useSelectedSet = (): Coordinate =>
  useSelector(state => state.selectedSet)

export {
  useCoordinates, useCoordinateSets, useSelectedSet
}