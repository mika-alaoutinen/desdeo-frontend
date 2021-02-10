import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container } from '@material-ui/core'

import Navigation from 'components/navigation/Navigation'
import { createCriteriaSets } from 'data/dataTransformations'
import Routes from 'router/Routes'
import { addData } from 'store/coordinates/coordinateActions'
import { addSets } from 'store/sets/setActions'
import { coordinates, optimizationData } from 'tests/testdata'

const style: React.CSSProperties = {
  fontFamily: 'Roboto',
}

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addData(coordinates))
    dispatch(addSets(createCriteriaSets(optimizationData)))
  }, [dispatch])

  return (
    <Container className='App' style={style}>
      <Navigation />
      <Routes />
    </Container>
  )
}

export default App
