import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AboutView from '../views/AboutView'
import BarChartView from '../views/BarChartView'
import HomeView from '../views/HomeView'
import { about, barchart, home } from './constants'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path={about} component={AboutView} />
    <Route exact path={barchart} component={BarChartView} />
    <Route exact path={home} component={HomeView} />
  </Switch>
)

export default Routes