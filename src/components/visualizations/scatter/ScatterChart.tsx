import React from 'react'
import { useDispatch } from 'react-redux'
import { ScatterChartComponent } from 'desdeo-components'

import { Coordinate } from 'misc/dataTypes'
import { useCoordinates } from 'hooks/selectors'
import { selectCoordinate } from 'store/coordinates/coordinateActions'

const ScatterChart: React.FC = () => {
  const data = useCoordinates()
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