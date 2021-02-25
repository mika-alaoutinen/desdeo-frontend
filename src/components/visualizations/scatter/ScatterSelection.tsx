import React from 'react'
import { useDispatch } from 'react-redux'
import { ScatterSelection as ScatterSelectionComponent } from 'desdeo-components'

import { Coordinate } from 'data/dataTypes'
import { useCoordinates } from 'hooks/selectors'
import { clearSelected, selectCoordinates } from 'store/coordinates/coordinateActions'

const ScatterSelection: React.FC = () => {
  const data = useCoordinates()
  const dispatch = useDispatch()

  const onSelect = (selected: Coordinate[]): void => {
    dispatch(selectCoordinates(selected))
  }

  const onSelectionCleared = (): void => {
    dispatch(clearSelected())
  }

  return (
    <ScatterSelectionComponent
      data={data}
      onSelect={onSelect}
      onSelectionCleared={onSelectionCleared}
    />
  )
}

export default ScatterSelection
