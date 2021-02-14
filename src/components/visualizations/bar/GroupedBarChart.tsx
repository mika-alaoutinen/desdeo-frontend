import React from 'react'
import { useDispatch } from 'react-redux'
import { GroupedBarChartComponent } from 'desdeo-components'

import { Coordinate } from 'data/dataTypes'
import { selectSet } from 'store/sets/setActions'

import { testdata } from 'tests/testdata'

// TODO: Read data from store
const GroupedBarChart: React.FC = () => {
  const data = testdata
  const dispatch = useDispatch()

  const onClick = (clicked: Coordinate): void => {
    dispatch(selectSet(clicked))
  }

  return (
    <GroupedBarChartComponent
      data={data}
      grouping={'alternatives'}
      orientation={'vertical'}
      onClick={onClick}
    />
  )
}

export default GroupedBarChart