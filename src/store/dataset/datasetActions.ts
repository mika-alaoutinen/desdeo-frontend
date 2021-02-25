import { AttributeSet, DataSet, Value } from 'data/dataTypes'
import { mapAttributeSetsToValues } from 'data/transformations'
import { ADD_DATASET, SELECT_DATA, SELECT_DATUM, DatasetAction } from './datasetTypes'

const addDataset = (data: DataSet[]): DatasetAction => ({
  type: ADD_DATASET,
  data,
})

const selectData = (data: AttributeSet[]): DatasetAction => {
  const values = mapAttributeSetsToValues(data)
  return {
    type: SELECT_DATA,
    data: values,
  }
}

const selectDatum = (datum: Value): DatasetAction => ({
  type: SELECT_DATUM,
  datum,
})

export { addDataset, selectData, selectDatum }
