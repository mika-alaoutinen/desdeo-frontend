import { DataSet, Value } from 'data/dataTypes'
import { ADD_DATASET, SELECT_DATA, SELECT_DATUM, DatasetAction } from './datasetTypes'

const addDataset = (data: DataSet[]): DatasetAction => ({
  type: ADD_DATASET,
  data,
})

const selectData = (data: Value[]): DatasetAction => ({
  type: SELECT_DATA,
  data,
})

const selectDatum = (datum: Value): DatasetAction => ({
  type: SELECT_DATUM,
  datum,
})

export { addDataset, selectData, selectDatum }
