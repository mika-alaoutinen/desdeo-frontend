import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AboutView from 'views/AboutView'
import BarChartsView from 'views/BarChartsView'
import ChartsView from 'views/ChartsView'
import HomeView from 'views/HomeView'

interface Link {
  text: string
  to: string
}

// Export home separately because it is not included in the navigation bar
const home: Link = { text: 'Home', to: '/' }
const about: Link = { text: 'About', to: '/about' }
const charts: Link = { text: 'Charts', to: '/charts' }
const barCharts: Link = { text: 'Bar', to: '/bar' }
const scatterCharts: Link = { text: 'Scatter', to: '/scatter' }
const tables: Link = { text: 'Tables', to: '/tables' }

export const links: Link[] = [home, about, charts, barCharts, scatterCharts, tables]

const Routes: React.FC = () => (
  <Switch>
    <Route exact path={about.to} component={AboutView} />
    <Route exact path={charts.to} component={ChartsView} />
    <Route exact path={home.to} component={HomeView} />
    <Route exact path={barCharts.to} component={BarChartsView} />
    <Route exact path={home.to} component={HomeView} />
    <Route exact path={home.to} component={HomeView} />
  </Switch>
)

export default Routes
