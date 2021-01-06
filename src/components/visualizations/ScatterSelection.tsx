import React from 'react'
import { useDispatch } from 'react-redux'
import { ScatterSelectionComponent } from 'desdeo-components'
import { Datum } from 'desdeo-components/build/types/dataTypes'

import { useData } from '../../hooks/selectors'
import { selectData } from '../../store/data/dataActions'

const ScatterSelection: React.FC = () => {
  const data = useData()
  const dispatch = useDispatch()

  const onSelect = (selected: Datum[]): void => {
    dispatch(selectData(selected))
  }

  return (
    <ScatterSelectionComponent
      data={data}
      onSelect={onSelect}
    />
  )
}

export default ScatterSelection