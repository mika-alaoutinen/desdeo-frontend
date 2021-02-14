import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container } from '@material-ui/core'

import Navigation from 'components/navigation/Navigation'
import Routes from 'router/Routes'
import { addCoordinates } from 'store/coordinates/coordinateActions'
import { addDataset } from 'store/dataset/datasetActions'
import { coordinates, testdata } from 'tests/testdata'

const style: React.CSSProperties = {
  fontFamily: 'Roboto',
}

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addCoordinates(coordinates))
    dispatch(addDataset(testdata))
  }, [dispatch])

  return (
    <Container className='App' style={style}>
      <Navigation />
      <Routes />
    </Container>
  )
}

export default App
