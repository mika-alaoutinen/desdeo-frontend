import React from 'react'
import { useDispatch } from 'react-redux'
import { GroupedBarChartComponent } from 'desdeo-components'
import { Coordinate } from 'desdeo-components/build/types/dataTypes'

import { selectSet } from '../../../store/sets/setActions'
import { useCoordinateSets } from '../../../hooks/selectors'

const GroupedBarChart: React.FC = () => {
  const data = useCoordinateSets()
  const dispatch = useDispatch()

  const onClick = (clicked: Coordinate): void => {
    dispatch(selectSet(clicked))
  }

  return (
    <GroupedBarChartComponent
      datasets={data}
      horizontal={true}
      onClick={onClick}
    />
  )
}

export default GroupedBarChart