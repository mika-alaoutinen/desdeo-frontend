import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Button, Toolbar } from '@material-ui/core'

import NavigationHeader from './NavigationHeader'
import { about, charts } from 'router/Routes'

const links = [about, charts]

const Navigation: React.FC = () => {
  const createNavButtons = (): JSX.Element[] =>
    links.map(({ text, to }) => (
      <Button key={text} color='inherit' component={Link} to={to}>
        {text}
      </Button>
    ))

  return (
    <AppBar position='static'>
      <Toolbar>
        <NavigationHeader />
        <nav>{createNavButtons()}</nav>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
