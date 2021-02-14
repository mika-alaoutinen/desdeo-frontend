import { Coordinate, DataSet } from 'data/dataTypes'
import {
  ADD_SETS, SELECT_SET, SetAction
} from './setTypes'

const addDataset = (data: DataSet): SetAction => ({
  type: ADD_SETS,
  data
})

const selectDatum = (datum: Coordinate): SetAction => ({
  type: SELECT_SET,
  datum
})

export { addDataset, selectDatum }