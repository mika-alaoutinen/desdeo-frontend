import React from 'react'

import BarChart from 'components/visualizations/bar/BarChart'
import GroupedBarChart from 'components/visualizations/bar/GroupedBarChart'
import StackedBarChart from 'components/visualizations/bar/StackedBarChart'
import { createGrid } from 'views/viewUtils'

const BarChartsView: React.FC = () => (
  <div className='BarChartsView'>
    <h2>Bar charts</h2>
    {createGrid(<BarChart />, <GroupedBarChart />, <StackedBarChart />)}
  </div>
)

export default BarChartsView
