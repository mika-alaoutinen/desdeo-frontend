import React from 'react'
import { ScatterSelectionComponent } from 'desdeo-components'

import { useReduxSelectHandler } from '../../hooks/onSelectDispatchers'
import { useData } from '../../hooks/selectors'

const ScatterSelection: React.FC = () => {
  const data = useData()
  const onSelect = useReduxSelectHandler()

  return (
    <ScatterSelectionComponent
      data={data}
      onSelect={onSelect}
    />
  )
}

export default ScatterSelection