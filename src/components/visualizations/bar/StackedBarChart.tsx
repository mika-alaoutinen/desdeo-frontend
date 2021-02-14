import React from 'react'
import { useDispatch } from 'react-redux'
import { StackedBarChartComponent } from 'desdeo-components'

import { Coordinate } from 'data/dataTypes'
import { selectDatum } from 'store/sets/setActions'
import { testdata } from 'tests/testdata'

// TODO: Read data from store
const StackedBarChart: React.FC = () => {
  const data = testdata
  const dispatch = useDispatch()

  const onClick = (clicked: Coordinate): void => {
    dispatch(selectDatum(clicked))
  }

  return (
    <StackedBarChartComponent
      data={data}
      grouping={'alternatives'}
      orientation={'horizontal'}
      onClick={onClick}
    />
  )
}

export default StackedBarChart