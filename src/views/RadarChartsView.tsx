import React from 'react'

import RadarChart from 'components/visualizations/radar/RadarChart'
import { createGrid } from './viewUtils'

const RadarChartsView: React.FC = () => {
  return (
    <div className='RadarChartView'>
      <h2>Radar Charts</h2>
      {createGrid(<RadarChart />)}
    </div>
  )
}

export default RadarChartsView
