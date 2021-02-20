import React from 'react'
import { useDispatch } from 'react-redux'
import { DataTable as DataTableComponent } from 'desdeo-components'

import { useDataset } from 'hooks/selectors'
import { Value } from 'misc/dataTypes'
import { selectDatum } from 'store/dataset/datasetActions'

const DataTable: React.FC = () => {
  const data = useDataset()
  const dispatch = useDispatch()

  const onClick = (value: Value): void => {
    dispatch(selectDatum(value))
  }

  return <DataTableComponent data={data} onClick={onClick} />
}

export default DataTable
