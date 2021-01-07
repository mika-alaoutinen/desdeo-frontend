import React from 'react'
import { Grid } from '@material-ui/core'

import BarChart from '../components/visualizations/BarChart'
import ScatterChart from '../components/visualizations/ScatterChart'
import ScatterSelection from '../components/visualizations/ScatterSelection'
import Table from '../components/visualizations/Table'

const ChartsView: React.FC = () => {

  const createSubHeading = (text: string): JSX.Element =>
    <h3 style={{ textAlign: 'center' }}>
      {text}
    </h3>

  const createGrid = (...components: JSX.Element[]): JSX.Element =>
    <Grid container justify='center'>
      {components.map(wrapComponentInGrid)}
    </Grid>

  const wrapComponentInGrid = (component: JSX.Element): JSX.Element =>
    <Grid item>{component}</Grid>

  return (
    <div className='ChartsView'>
      <h2>Charts page</h2>

      {createSubHeading('Clickable charts')}
      {createGrid(<BarChart />, <ScatterChart />)}

      {createSubHeading('Selectable charts')}
      {createGrid(<ScatterSelection />)}

      {createSubHeading('Basic table')}
      {createGrid(<Table />)}

    </div>
  )
}

export default ChartsView