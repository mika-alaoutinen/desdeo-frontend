import React from 'react'
import { Grid } from '@material-ui/core'

import BarChart from 'components/visualizations/bar/BarChart'
import GroupedBarChart from 'components/visualizations/bar/GroupedBarChart'
import StackedBarChart from 'components/visualizations/bar/StackedBarChart'
import ParallelAxes from 'components/visualizations/parallelAxes/ParallelAxes'
import ScatterChart from 'components/visualizations/scatter/ScatterChart'
import ScatterSelection from 'components/visualizations/scatter/ScatterSelection'
import CoordinateTable from 'components/visualizations/table/CoordinateTable'
import DataTable from 'components/visualizations/table/DataTable'

import { useSelectedSet } from 'hooks/selectors'

const ChartsView: React.FC = () => {
  const { id, label, y } = useSelectedSet()

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

      <p>Selected coordinate:</p>
      <p>ID: {id}</p>
      <p>Label: {label}</p>
      <p>Y: {y}</p>

      {createSubHeading('Bar charts')}
      {createGrid(<BarChart />, <GroupedBarChart />, <StackedBarChart />)}

      {createSubHeading('Scatter charts')}
      {createGrid(<ScatterChart />, <ScatterSelection />)}

      {createSubHeading('Basic table')}
      {createGrid(<CoordinateTable />)}

      {createSubHeading('Data table')}
      {createGrid(<DataTable />)}

      {createSubHeading('Filtering')}
      {createGrid(<ParallelAxes />)}
    </div>
  )
}

export default ChartsView