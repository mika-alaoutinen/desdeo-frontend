import React from 'react'
import { useDispatch } from 'react-redux'
import { BarChartComponent } from 'desdeo-components'

import { Value } from 'misc/dataTypes'
import { useDataset } from 'hooks/selectors'
import { selectDatum } from 'store/dataset/datasetActions'

const BarChart: React.FC = () => {
  const data = useDataset()[0]
  const dispatch = useDispatch()

  const onClick = (clicked: Value): void => {
    dispatch(selectDatum(clicked))
  }

  return (
    <BarChartComponent
      data={data}
      onClick={onClick}
    />
  )
}

export default BarChart