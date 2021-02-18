import React from 'react'
import { ParallelAxesComponent } from 'desdeo-components'

import { useDataset } from 'hooks/selectors'

const ParallelAxes: React.FC = () => {
  const data = useDataset()

  return <ParallelAxesComponent data={data} />
}

export default ParallelAxes
