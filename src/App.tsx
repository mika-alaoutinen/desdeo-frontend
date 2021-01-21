import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container } from '@material-ui/core'

import Navigation from './components/navigation/Navigation'
import Routes from './router/Routes'
import { addData } from './store/coordinates/coordinateActions'
import { addSets } from './store/sets/coordinateSetActions'
import { coordinates, coordinateSets } from './tests/testdata'

const style: React.CSSProperties = {
  fontFamily: 'Roboto',
}

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addData(coordinates))
    dispatch(addSets(coordinateSets))
  }, [dispatch])

  return (
    <Container className='App' style={style}>
      <Navigation />
      <Routes />
    </Container>
  )
}

export default App
