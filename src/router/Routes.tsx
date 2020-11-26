import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomeView from '../views/HomeView'
import { home } from '../constants'

// Add new routes ABOVE HomeView, because router picks the first matching route!
const Routes: React.FC = () => (
  <Switch>
    <Route exact path={home} component={HomeView} />
  </Switch>
)

export default Routes