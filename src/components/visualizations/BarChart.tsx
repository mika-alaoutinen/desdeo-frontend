import React from 'react'
import { BarChartComponent } from 'desdeo-components'

import { useReduxClickHandler } from '../../hooks/onClickDispatchers'
import { useData } from '../../hooks/selectors'

const BarChart: React.FC = () => {
  const data = useData()
  const onClick = useReduxClickHandler()

  return (
    <BarChartComponent
      data={data}
      onClick={onClick}
    />
  )
}

export default BarChart