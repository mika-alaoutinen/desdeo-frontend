import React from 'react'
import { Grid } from '@material-ui/core'

import BarChart from '../components/visualizations/BarChart'
import ScatterChart from '../components/visualizations/ScatterChart'

const ChartsView: React.FC = () => {

  const createSubHeading = (text: string): JSX.Element =>
    <h3 style={{ textAlign: 'center' }}>
      {text}
    </h3>

  return (
    <div className='ChartsView'>
      <h2>Charts page</h2>

      {createSubHeading('Clickable charts')}
      <Grid container justify='center'>
        <Grid item>
          <BarChart />
        </Grid>
        <Grid item>
          <ScatterChart />
        </Grid>
      </Grid>

      {createSubHeading('Selectable charts')}
      <Grid container justify='center'>
        <Grid item>
          <BarChart />
        </Grid>
        <Grid item>
          <ScatterChart />
        </Grid>
      </Grid>
    </div>
  )
}

export default ChartsView