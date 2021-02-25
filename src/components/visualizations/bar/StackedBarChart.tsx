import React from 'react'
import { useDispatch } from 'react-redux'
import { StackedBar } from 'desdeo-components'

import { Value } from 'data/dataTypes'
import { useDataset } from 'hooks/selectors'
import { selectDatum } from 'store/dataset/datasetActions'

const StackedBarChart: React.FC = () => {
  const data = useDataset()
  const dispatch = useDispatch()

  const onClick = (clicked: Value): void => {
    dispatch(selectDatum(clicked))
  }

  return (
    <StackedBar
      data={data}
      grouping={'alternatives'}
      orientation={'horizontal'}
      onClick={onClick}
    />
  )
}

export default StackedBarChart
