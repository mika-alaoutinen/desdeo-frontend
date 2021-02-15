import React from 'react'
import { useDispatch } from 'react-redux'
import { ScatterChartComponent } from 'desdeo-components'

import { Coordinate } from 'misc/dataTypes'
import { useDataSetTuple } from 'hooks/selectors'
import { selectCoordinate } from 'store/coordinates/coordinateActions'

const ScatterChart: React.FC = () => {
  const data = useDataSetTuple()
  const dispatch = useDispatch()

  const onClick = (clicked: Coordinate): void => {
    dispatch(selectCoordinate(clicked))
  }

  return (
    <ScatterChartComponent
      data={data}
      onClick={onClick}
    />
  )
}

export default ScatterChart