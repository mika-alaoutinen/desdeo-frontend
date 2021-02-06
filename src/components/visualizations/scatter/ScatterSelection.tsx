import React from 'react'
import { useDispatch } from 'react-redux'
import { ScatterSelectionComponent } from 'desdeo-components'
import { Coordinate } from 'desdeo-components/build/types/dataTypes'

import { useCoordinates } from 'hooks/selectors'
import { clearSelected, selectData } from 'store/coordinates/coordinateActions'

const ScatterSelection: React.FC = () => {
  const data = useCoordinates()
  const dispatch = useDispatch()

  const onSelect = (selected: Coordinate[]): void => {
    dispatch(selectData(selected))
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