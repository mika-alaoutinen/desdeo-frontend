import React from 'react'
import { Container } from '@material-ui/core'

import Navigation from './components/navigation/Navigation'
import Routes from './router/Routes'
import { style } from './misc/layout'

const App: React.FC = () => {
  
  return (
    <Container className='App' style={style}>
      <Navigation />
      <Routes />
    </Container>
  )
}

export default App
