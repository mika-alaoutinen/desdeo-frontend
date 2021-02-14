import {
  Coordinate, CoordinateSet, ParallelAxesData
} from 'desdeo-components/build/types/dataTypes'

// A dataset can have any number of columns
type DataSet = DataColumn[]

// Represents a column in the example CSV
interface DataColumn {
  label: string,
  data: number[]
}

export type {
  Coordinate, CoordinateSet, DataSet, ParallelAxesData,
}