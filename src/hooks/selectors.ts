import { Coordinate, DataSet } from 'misc/dataTypes'
import { useSelector } from 'store/reduxTypes'

export const useCoordinates = (): Coordinate[] => useSelector(state => state.coordinates)

export const useDataset = (): DataSet[] => useSelector(state => state.dataset)
