import React from 'react'
import { Grid } from '@material-ui/core'

import BarChart from '../components/visualizations/bar/BarChart'
import GroupedBarChart from '../components/visualizations/bar/GroupedBarChart'
import StackedBarChart from '../components/visualizations/bar/StackedBarChart'
import ScatterChart from '../components/visualizations/scatter/ScatterChart'
import ScatterSelection from '../components/visualizations/scatter/ScatterSelection'
import Table from '../components/visualizations/table/Table'

const ChartsView: React.FC = () => {

  const createSubHeading = (text: string): JSX.Element =>
    <h3 style={{ textAlign: 'center' }}>
      {text}
    </h3>

  const createGrid = (...components: JSX.Element[]): JSX.Element =>
    <Grid
      className='chart-grid'
      container
      justify='center'
    >
      {components.map((component, index) => wrapComponentInGrid(component, index))}
    </Grid>

  const wrapComponentInGrid = (component: JSX.Element, key: number): JSX.Element =>
    <Grid key={key} item>
      {component}
    </Grid>

  return (
    <div className='ChartsView'>
      <h2>Charts page</h2>

      {createSubHeading('Bar charts')}
      {createGrid(<BarChart />, <GroupedBarChart />, <StackedBarChart />)}

      {createSubHeading('Scatter charts')}
      {createGrid(<ScatterChart />, <ScatterSelection />)}

      {createSubHeading('Basic table')}
      {createGrid(<Table />)}
    </div>
  )
}

export default ChartsView