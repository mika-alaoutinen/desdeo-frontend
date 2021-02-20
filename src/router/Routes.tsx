import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AboutView from 'views/AboutView'
import BarChartsView from 'views/BarChartsView'
import HomeView from 'views/HomeView'
import ParallelCoordinatesView from 'views/ParallelCoordinatesView'
import RadarChartsView from 'views/RadarChartsView'
import ScatterChartsView from 'views/ScatterChartsView'
import TablesView from 'views/TablesView'

interface Link {
  text: string
  to: string
}

const home: Link = { text: 'Home', to: '/' }
const about: Link = { text: 'About', to: '/about' }
const barCharts: Link = { text: 'Bar', to: '/bar' }
const parallelCoordinates: Link = { text: 'Parallel Coordinates', to: '/parallel-coordinates' }
const radarCharts: Link = { text: 'Radar', to: '/radar' }
const scatterCharts: Link = { text: 'Scatter', to: '/scatter' }
const tables: Link = { text: 'Tables', to: '/tables' }

export const links: Link[] = [
  home,
  about,
  barCharts,
  parallelCoordinates,
  radarCharts,
  scatterCharts,
  tables,
]

const Routes: React.FC = () => (
  <Switch>
    <Route exact path={about.to} component={AboutView} />
    <Route exact path={barCharts.to} component={BarChartsView} />
    <Route exact path={parallelCoordinates.to} component={ParallelCoordinatesView} />
    <Route exact path={radarCharts.to} component={RadarChartsView} />
    <Route exact path={scatterCharts.to} component={ScatterChartsView} />
    <Route exact path={tables.to} component={TablesView} />
    <Route exact path={home.to} component={HomeView} />
  </Switch>
)

export default Routes
