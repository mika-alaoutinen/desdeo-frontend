import React from 'react'
import { ParallelAxes } from 'desdeo-components'

import { useDataset } from 'hooks/selectors'

const ParallelCoordinates: React.FC = () => {
  const data = useDataset()

  return <ParallelAxes data={data} />
}

export default ParallelCoordinates
