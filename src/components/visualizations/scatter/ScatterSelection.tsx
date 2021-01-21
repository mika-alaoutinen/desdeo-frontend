import React from 'react'
import { useDispatch } from 'react-redux'
import { ScatterSelectionComponent } from 'desdeo-components'
import { Coordinate } from 'desdeo-components/build/types/dataTypes'

import { useData } from '../../../hooks/selectors'
import { clearSelected, selectData } from '../../../store/data/dataActions'

const ScatterSelection: React.FC = () => {
  const data = useData()
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