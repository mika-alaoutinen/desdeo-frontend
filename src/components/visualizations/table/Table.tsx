import React from 'react'
import { useDispatch } from 'react-redux'
import { TableComponent } from 'desdeo-components'
import { Coordinate } from 'desdeo-components/build/types/dataTypes'

import { useData } from '../../../hooks/selectors'
import { selectDatum } from '../../../store/coordinates/coordinateActions'

const Table: React.FC = () => {
  const data = useData()
  const dispatch = useDispatch()

  const onClick = (clicked: Coordinate): void => {
    dispatch(selectDatum(clicked))
  }

  return (
    <TableComponent
      data={data}
      onClick={onClick}
    />
  )
}

export default Table