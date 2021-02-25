import {
  Attribute,
  AttributeSet,
  Coordinate,
  CoordinateSet,
  DataSet,
  Value,
} from 'desdeo-components/build/types/dataTypes'

type InputDataSet = InputData[]

interface InputData {
  label: string
  data: number[]
}

export type { Attribute, AttributeSet, Coordinate, CoordinateSet, DataSet, InputDataSet, Value }
