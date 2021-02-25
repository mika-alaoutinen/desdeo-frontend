import React from 'react'
import { ParallelAxes } from 'desdeo-components'

import { Attribute, AttributeSet } from 'data/dataTypes'
import { useDataset } from 'hooks/selectors'

const ParallelCoordinates: React.FC = () => {
  const data = useDataset()

  const onChangeHandler = (active: AttributeSet[]): void => {
    console.log('onChange', active)
  }

  const onLineClickHandler = (alternatives: Attribute[]): void => {
    console.log('alternative', alternatives)
  }

  return <ParallelAxes data={data} onChange={onChangeHandler} onLineClick={onLineClickHandler} />
}

export default ParallelCoordinates
