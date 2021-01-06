import React from 'react'
import { useDispatch } from 'react-redux'
import { ScatterSelectionComponent } from 'desdeo-components'
import { Datum } from 'desdeo-components/build/types/dataTypes'

import { useData } from '../../hooks/selectors'
import { clearSelections, selectData } from '../../store/data/dataActions'

const ScatterSelection: React.FC = () => {
  const data = useData()
  const dispatch = useDispatch()

  const onSelect = (selected: Datum[]): void => {
    dispatch(selectData(selected))
  }

  const onSelectionCleared = (): void => {
    dispatch(clearSelections())
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