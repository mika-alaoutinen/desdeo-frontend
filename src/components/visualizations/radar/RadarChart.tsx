import React from 'react'
import { Radar } from 'desdeo-components'

import { useDataset } from 'hooks/selectors'

const RadarChart: React.FC = () => {
  const data = useDataset()

  return <Radar data={data} />
}

export default RadarChart
