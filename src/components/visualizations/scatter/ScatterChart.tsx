import React from 'react'
import { useDispatch } from 'react-redux'
import { Scatter } from 'desdeo-components'

import { useCoordinates } from 'hooks/selectors'
import { Coordinate } from 'data/dataTypes'
import { selectCoordinate } from 'store/coordinates/coordinateActions'

const ScatterChart: React.FC = () => {
  const data = useCoordinates()
  const dispatch = useDispatch()

  const onClick = (clicked: Coordinate): void => {
    dispatch(selectCoordinate(clicked))
  }

  return <Scatter data={data} onClick={onClick} />
}

export default ScatterChart
