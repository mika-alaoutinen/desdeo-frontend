import React from 'react'
import { useDispatch } from 'react-redux'
import { StackedBarChartComponent } from 'desdeo-components'

import { Coordinate } from 'data/dataTypes'
import { useCoordinateSets } from 'hooks/selectors'
import { selectSet } from 'store/sets/setActions'

const StackedBarChart: React.FC = () => {
  const data = useCoordinateSets()
  const dispatch = useDispatch()

  const onClick = (clicked: Coordinate): void => {
    dispatch(selectSet(clicked))
  }

  return (
    <StackedBarChartComponent
      datasets={data}
      onClick={onClick}
    />
  )
}

export default StackedBarChart