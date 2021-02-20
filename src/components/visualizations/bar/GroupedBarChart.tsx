import React from 'react'
import { useDispatch } from 'react-redux'
import { GroupedBar } from 'desdeo-components'

import { Value } from 'misc/dataTypes'
import { useDataset } from 'hooks/selectors'
import { selectDatum } from 'store/dataset/datasetActions'

const GroupedBarChart: React.FC = () => {
  const data = useDataset()
  const dispatch = useDispatch()

  const onClick = (clicked: Value): void => {
    dispatch(selectDatum(clicked))
  }

  return (
    <GroupedBar data={data} grouping={'alternatives'} orientation={'vertical'} onClick={onClick} />
  )
}

export default GroupedBarChart
