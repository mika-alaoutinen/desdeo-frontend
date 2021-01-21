import React from 'react'
// import { useDispatch } from 'react-redux'
import { GroupedBarChartComponent } from 'desdeo-components'

// import { useData } from '../../../hooks/selectors'
import { Coordinate } from 'desdeo-components/build/types/dataTypes'

const GroupedBarChart: React.FC = () => {
  // const data = useData()
  // const dispatch = useDispatch()

  const onClick = (clicked: Coordinate): void => {
    console.log('coordinate', clicked)
  }

  return (
    <GroupedBarChartComponent
      datasets={[]}
      onClick={onClick}
    />
  )
}

export default GroupedBarChart