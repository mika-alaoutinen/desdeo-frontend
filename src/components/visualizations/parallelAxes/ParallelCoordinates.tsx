import React from 'react'
import { useDispatch } from 'react-redux'
import { ParallelAxes } from 'desdeo-components'

import { Attribute, AttributeSet } from 'data/dataTypes'
import { mapAttributeSetsToValues } from 'data/transformations'
import { useDataset } from 'hooks/selectors'
import { selectData } from 'store/dataset/datasetActions'

const ParallelCoordinates: React.FC = () => {
  const data = useDataset()
  const dispatch = useDispatch()

  const onChangeHandler = (active: AttributeSet[]): void => {
    const activeValues = mapAttributeSetsToValues(active)
    console.log('values', activeValues)
    dispatch(selectData(activeValues))
  }

  const onLineClickHandler = (alternatives: Attribute[]): void => {
    console.log('alternative', alternatives)
  }

  return <ParallelAxes data={data} onChange={onChangeHandler} onLineClick={onLineClickHandler} />
}

export default ParallelCoordinates
