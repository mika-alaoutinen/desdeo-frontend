import React from 'react'
import { ParallelAxes } from 'desdeo-components'

import { useDataset } from 'hooks/selectors'
import { Attribute, AttributeSet } from 'data/dataTypes'

const ParallelCoordinates: React.FC = () => {
  const data = useDataset()

  const onChangeHandler = (active: AttributeSet[]): void => {
    console.log('active', active)
  }

  const onLineClickHandler = (alternatives: Attribute[]): void => {
    console.log('alternative', alternatives)
  }

  return <ParallelAxes data={data} onChange={onChangeHandler} onLineClick={onLineClickHandler} />
}

export default ParallelCoordinates
