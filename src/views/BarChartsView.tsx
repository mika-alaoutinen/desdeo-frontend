import React from 'react'
import { Grid } from '@material-ui/core'

import BarChart from 'components/visualizations/bar/BarChart'
import GroupedBarChart from 'components/visualizations/bar/GroupedBarChart'
import StackedBarChart from 'components/visualizations/bar/StackedBarChart'

const BarChartsView: React.FC = () => {
  const createGrid = (...components: JSX.Element[]): JSX.Element => (
    <Grid container justify='center'>
      {components.map((component, index) => wrapComponentInGrid(component, index))}
    </Grid>
  )

  const wrapComponentInGrid = (component: JSX.Element, key: number): JSX.Element => (
    <Grid key={key} item>
      {component}
    </Grid>
  )

  return (
    <div className='BarChartsView'>
      <h2>Bar charts</h2>
      {createGrid(<BarChart />, <GroupedBarChart />, <StackedBarChart />)}
    </div>
  )
}

export default BarChartsView
