import React from 'react'
import { useDispatch } from 'react-redux'
import { BarChartComponent } from 'desdeo-components'
import { Datum } from 'desdeo-components/build/types/dataTypes'

import { useData } from '../../hooks/selectors'
import { selectDatum } from '../../store/data/dataActions'

const BarChart: React.FC = () => {
  const data = useData()
  const dispatch = useDispatch()

  const onClick = (clicked: Datum): void => {
    dispatch(selectDatum(clicked))
  }

  return (
    <BarChartComponent
      data={data}
      onClick={onClick}
    />
  )
}

export default BarChart