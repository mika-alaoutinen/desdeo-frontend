import React from 'react'
import { ParallelAxesComponent } from 'desdeo-components'

import { filterData } from 'tests/testdata'

const ParallelAxes: React.FC = () => {
  return (
    <ParallelAxesComponent
      data={filterData}
    />
  )
}

export default ParallelAxes