import ScatterChart from 'components/visualizations/scatter/ScatterChart'
import ScatterSelection from 'components/visualizations/scatter/ScatterSelection'
import React from 'react'
import { createGrid } from 'views/viewUtils'

const ScatterChartsView: React.FC = () => (
  <div className='ScatterChartsView'>
    <h2>Scatter charts</h2>
    {createGrid(<ScatterChart />, <ScatterSelection />)}
  </div>
)

export default ScatterChartsView
