import React from 'react'
import { useDispatch } from 'react-redux'
import { ParallelAxes } from 'desdeo-components'

import { Attribute, AttributeSet } from 'data/dataTypes'
import { mapAttributeSetsToValues } from 'data/transformations'
import { useDataset } from 'hooks/selectors'
import { selectDatum } from 'store/dataset/datasetActions'

const ParallelCoordinates: React.FC = () => {
  const data = useDataset()
  const dispatch = useDispatch()

  const onChangeHandler = (active: AttributeSet[]): void => {
    console.log('active', active)
    const activeValues = mapAttributeSetsToValues(active)
    activeValues.forEach(value => dispatch(selectDatum(value)))
    console.log('values', activeValues)
  }

  const onLineClickHandler = (alternatives: Attribute[]): void => {
    console.log('alternative', alternatives)
  }

  return <ParallelAxes data={data} onChange={onChangeHandler} onLineClick={onLineClickHandler} />
}

export default ParallelCoordinates
