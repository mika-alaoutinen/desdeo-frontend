import React from 'react'
import { useDispatch } from 'react-redux'
import { ParallelAxes } from 'desdeo-components'

import { Attribute, AttributeSet } from 'data/dataTypes'
import { useDataset } from 'hooks/selectors'
import { selectData } from 'store/dataset/datasetActions'

const ParallelCoordinates: React.FC = () => {
  const data = useDataset()
  const dispatch = useDispatch()

  const onChangeHandler = (active: AttributeSet[]): void => {
    dispatch(selectData(active))
  }

  const onLineClickHandler = (alternatives: Attribute[]): void => {
    console.log('alternative', alternatives)
  }

  return <ParallelAxes data={data} onChange={onChangeHandler} onLineClick={onLineClickHandler} />
}

export default ParallelCoordinates
