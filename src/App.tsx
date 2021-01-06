import React from 'react'
import { Container } from '@material-ui/core'

import Navigation from './components/navigation/Navigation'
import Routes from './router/Routes'

const style: React.CSSProperties = {
  fontFamily: 'Roboto',
}

const App: React.FC = () => {
  
  return (
    <Container className='App' style={style}>
      <Navigation />
      <Routes />
    </Container>
  )
}

export default App
