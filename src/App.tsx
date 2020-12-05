import React from 'react'

import Header from './components/common/Header'
import Navigation from './components/common/Navigation'
import Routes from './router/Routes'

const App: React.FC = () => {
  
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <Routes />
    </div>
  )
}

export default App
