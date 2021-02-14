import React from 'react'
import { useDispatch } from 'react-redux'
import { CoordinateTableComponent } from 'desdeo-components'

import { Coordinate } from 'data/dataTypes'
import { useCoordinates } from 'hooks/selectors'
import { selectDatum } from 'store/coordinates/coordinateActions'

const CoordinateTable: React.FC = () => {
  const data = useCoordinates()
  const dispatch = useDispatch()

  const onClick = (clicked: Coordinate): void => {
    dispatch(selectDatum(clicked))
  }

  return (
    <CoordinateTableComponent
      data={data}
      onClick={onClick}
    />
  )
}

export default CoordinateTable