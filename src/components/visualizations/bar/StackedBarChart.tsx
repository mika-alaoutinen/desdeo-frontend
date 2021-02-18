import React from 'react'
import { useDispatch } from 'react-redux'
import { StackedBarChartComponent } from 'desdeo-components'

import { Value } from 'misc/dataTypes'
import { useDataset } from 'hooks/selectors'
import { selectDatum } from 'store/dataset/datasetActions'

const StackedBarChart: React.FC = () => {
  const data = useDataset()
  const dispatch = useDispatch()

  const onClick = (clicked: Value): void => {
    dispatch(selectDatum(clicked))
  }

  return (
    <StackedBarChartComponent
      data={data}
      grouping={'alternatives'}
      orientation={'horizontal'}
      onClick={onClick}
    />
  )
}

export default StackedBarChart
