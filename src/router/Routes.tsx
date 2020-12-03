import React from 'react'
import { Route, Switch } from 'react-router-dom'

import BarChartView from '../views/BarChartView'
import HomeView from '../views/HomeView'
import { barchart, home } from '../constants'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path={barchart} component={BarChartView} />
    <Route exact path={home} component={HomeView} />
  </Switch>
)

export default Routes