import React from 'react'
import Grid from '@material-ui/core/Grid'

import Navigation from './components/navigation/Navigation'
import Routes from './router/Routes'
import { style } from './layout'

const App: React.FC = () => {
  
  return (
    <Grid
      alignItems='center'
      className='App'
      container
      direction='column'
      justify='center'
      spacing={0}
      style={style}
    >
      <Navigation />
      <Routes />
    </Grid>
  )
}

export default App
