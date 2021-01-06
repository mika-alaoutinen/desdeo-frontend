import React from 'react'

import BarChart from '../components/visualizations/BarChart'
import ScatterSelection from '../components/visualizations/ScatterSelection'

const ChartsView: React.FC = () => (
  <div className='ChartsView'>
    <h2>Charts page</h2>
    <BarChart />
    <ScatterSelection />
  </div>
)

export default ChartsView