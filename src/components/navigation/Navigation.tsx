import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Button, Toolbar } from '@material-ui/core'

import NavigationHeader from './NavigationHeader'
import { about, barchart } from '../../router/Routes'

const links = [ about, barchart ]

const Navigation: React.FC = () => {

  const createNavButtons = (): JSX.Element[] =>
    links.map(({ text, to }) =>
      <Button
        key={text}
        color='inherit'
        component={Link}
        to={to}
      >
        {text}
      </Button>
    )
  
  return (
    <AppBar position='static'>
      <Toolbar>
        <NavigationHeader />
        {createNavButtons()}
      </Toolbar>
    </AppBar>
  )
}

export default Navigation