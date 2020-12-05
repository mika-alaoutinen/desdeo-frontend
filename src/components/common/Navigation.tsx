import React from 'react'
import { Link } from 'react-router-dom'
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'

import { navigation, NavLink } from './navigationTypes'

const Navigation: React.FC = () => {

  const createListItem = (link: NavLink): JSX.Element => (
    <ListItem
      key={link.text}
      button
      component={Link}
      to={link.to}
    >
      <ListItemText primary={link.text} />
    </ListItem>
  )
  
  return (
    <Drawer
      anchor='left'
      variant='permanent'
    >
      <List>
        {navigation.map(nav => createListItem(nav))}
      </List>
    </Drawer>
  )
}

export default Navigation