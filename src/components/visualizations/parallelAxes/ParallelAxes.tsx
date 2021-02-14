import React from 'react'
import { ParallelAxesComponent } from 'desdeo-components'

import { testdata } from 'tests/testdata'

// TODO: Read data from store
const ParallelAxes: React.FC = () => {
  return (
    <ParallelAxesComponent
      data={testdata}
    />
  )
}

export default ParallelAxes