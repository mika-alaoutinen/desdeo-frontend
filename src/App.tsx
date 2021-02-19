import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container } from '@material-ui/core'

import Navigation from 'components/navigation/Navigation'
import Routes from 'router/Routes'
import { addCoordinates } from 'store/coordinates/coordinateActions'
import { addDataset } from 'store/dataset/datasetActions'
import { coordinates, dataset } from 'data/testdata'

const style: React.CSSProperties = {
  fontFamily: 'Roboto',
}

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addCoordinates(coordinates))
    dispatch(addDataset(dataset))
  }, [dispatch])

  return (
    <Container className='App' style={style}>
      <Navigation />
      <Routes />
    </Container>
  )
}

export default App
