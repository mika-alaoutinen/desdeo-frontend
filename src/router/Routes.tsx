import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AboutView from 'views/AboutView'
import ChartsView from 'views/ChartsView'
import HomeView from 'views/HomeView'

interface Link {
  text: string
  to: string
}

export const home: Link = {
  text: 'Home',
  to: '/',
}

export const about: Link = {
  text: 'About',
  to: '/about',
}

export const charts: Link = {
  text: 'Charts',
  to: '/charts',
}

const Routes: React.FC = () => (
  <Switch>
    <Route exact path={about.to} component={AboutView} />
    <Route exact path={charts.to} component={ChartsView} />
    <Route exact path={home.to} component={HomeView} />
  </Switch>
)

export default Routes
