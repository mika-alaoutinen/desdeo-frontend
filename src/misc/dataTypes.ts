import {
  Coordinate,
  CoordinateSet,
  DataSet,
  ParallelAxesData,
  Value,
} from 'desdeo-components/build/types/dataTypes'

type InputDataSet = InputData[]

interface InputData {
  label: string
  data: number[]
}

export type { Coordinate, CoordinateSet, DataSet, InputDataSet, ParallelAxesData, Value }
