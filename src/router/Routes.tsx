import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AboutView from '../views/AboutView'
import BarChartView from '../views/BarChartView'
import HomeView from '../views/HomeView'

interface Link {
  text: string,
  to: string
}

export const home: Link = {
  text: 'Home',
  to: '/'
}

export const about: Link = {
  text: 'About',
  to: '/about'
}

export const barchart: Link = {
  text: 'Bar chart',
  to: '/barchart'
}

const Routes: React.FC = () => (
  <Switch>
    <Route exact path={about.to} component={AboutView} />
    <Route exact path={barchart.to} component={BarChartView} />
    <Route exact path={home.to} component={HomeView} />
  </Switch>
  )

export default Routes