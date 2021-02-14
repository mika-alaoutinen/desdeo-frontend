import React from 'react'
import { useDispatch } from 'react-redux'
import { GroupedBarChartComponent } from 'desdeo-components'

import { Coordinate } from 'data/dataTypes'
import { useDataset } from 'hooks/selectors'
import { selectDatum } from 'store/dataset/datasetActions'

const GroupedBarChart: React.FC = () => {
  const data = useDataset()
  const dispatch = useDispatch()

  const onClick = (clicked: Coordinate): void => {
    dispatch(selectDatum(clicked))
  }

  return (
    <GroupedBarChartComponent
      data={data}
      grouping={'alternatives'}
      orientation={'vertical'}
      onClick={onClick}
    />
  )
}

export default GroupedBarChart