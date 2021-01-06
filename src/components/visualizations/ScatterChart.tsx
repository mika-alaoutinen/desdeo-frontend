import React from 'react'
import { ScatterChartComponent } from 'desdeo-components'

import { useReduxClickHandler } from '../../hooks/onClickDispatchers'
import { useData } from '../../hooks/selectors'

const ScatterChart: React.FC = () => {
  const data = useData()
  const onClick = useReduxClickHandler()

  return (
    <ScatterChartComponent
      data={data}
      onClick={onClick}
    />
  )
}

export default ScatterChart