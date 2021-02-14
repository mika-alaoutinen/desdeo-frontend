import { Coordinate, DataSet } from 'data/dataTypes'
import { useSelector } from 'store/reduxTypes'

const useCoordinates = (): Coordinate[] =>
  useSelector(state => state.coordinates)

const useCoordinateSets = (): DataSet =>
  useSelector(state => state.dataset)

const useSelectedSet = (): Coordinate =>
  useSelector(state => state.selectedSet)

export {
  useCoordinates, useCoordinateSets, useSelectedSet
}