import { Coordinate, CoordinateSet } from 'data/dataTypes'
import { useSelector } from 'store/reduxTypes'

const useCoordinates = (): Coordinate[] =>
  useSelector(state => state.coordinates)

const useCoordinateSets = (): CoordinateSet[] =>
  useSelector(state => state.sets)

const useSelectedSet = (): Coordinate =>
  useSelector(state => state.selectedSet)

export {
  useCoordinates, useCoordinateSets, useSelectedSet
}