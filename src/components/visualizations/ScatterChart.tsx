import React from 'react'
import { useDispatch } from 'react-redux'
import { ScatterChartComponent } from 'desdeo-components'
import { Datum } from 'desdeo-components/build/types/dataTypes'

import { useData } from '../../hooks/selectors'
import { selectDatum } from '../../store/data/dataActions'

const ScatterChart: React.FC = () => {
  const data = useData()
  const dispatch = useDispatch()

  const onClick = (clicked: Datum): void => {
    dispatch(selectDatum(clicked))
  }

  return (
    <ScatterChartComponent
      data={data}
      onClick={onClick}
    />
  )
}

export default ScatterChart