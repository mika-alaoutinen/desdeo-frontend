import { Coordinate, DataSet, DataSetTuple } from 'misc/dataTypes'
import { useSelector } from 'store/reduxTypes'

export const useCoordinates = (): Coordinate[] =>
  useSelector(state => state.coordinates)

export const useDataset = (): DataSet =>
  useSelector(state => state.dataset)

export const useDataSetTuple = (): DataSetTuple => {
  const dataset = useSelector(state => state.dataset)
  return [ dataset[0], dataset[1] ]
}

export const useSelectedSet = (): Coordinate =>
  useSelector(state => state.selectedDataset)