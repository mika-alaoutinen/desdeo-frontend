import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core'

import Header from '../common/Header'
import { navigation, NavLink } from './navigationConstants'

const Navigation: React.FC = () => {
  
  const createListItem = ({ text, to }: NavLink): JSX.Element => (
    <ListItem
      key={text}
      button
      component={Link}
      to={to}
    >
      <ListItemText primary={text} />
    </ListItem>
  )
  
  return (
    <Drawer
      anchor='left'
      className='NavigationDrawer'
      style={{  margin: '5em' }}
      variant='permanent'
    >
      <Header />
      <Divider />

      <List style={{ marginRight: '5em' }}>
        {navigation.map(nav => createListItem(nav))}
      </List>

    </Drawer>
  )
}

export default Navigation