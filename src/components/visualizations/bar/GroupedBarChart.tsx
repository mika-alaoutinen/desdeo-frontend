import React from 'react'
import { useDispatch } from 'react-redux'
import { GroupedBarChartComponent } from 'desdeo-components'

import { Coordinate } from 'data/dataTypes'
import { selectSet } from 'store/sets/setActions'
import { useCoordinateSets } from 'hooks/selectors'

const GroupedBarChart: React.FC = () => {
  const data = useCoordinateSets()
  const dispatch = useDispatch()

  const onClick = (clicked: Coordinate): void => {
    dispatch(selectSet(clicked))
  }

  return (
    <GroupedBarChartComponent
      datasets={data}
      labels={[ 'WQ\nFishery', 'WQ\nCity', 'ROI', 'City\nTax', 'Plant\nResources' ]}
      orientation={'vertical'}
      onClick={onClick}
    />
  )
}

export default GroupedBarChart