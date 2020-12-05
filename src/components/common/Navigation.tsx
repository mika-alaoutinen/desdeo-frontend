import React from 'react'
import { Link } from 'react-router-dom'
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'

import { about, barchart, home } from '../../constants'

const Navigation: React.FC = () => {

  const createListItems = (): JSX.Element[] => {
    const links = [
      { text: 'Home', to: home },
      { text: 'About', to: about },
      { text: 'Bar chart', to: barchart },
    ]

    return links.map(link => createListItem(link.text, link.to))
  }

  const createListItem = (text: string, to: string): JSX.Element => (
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
      variant='permanent'
    >
      <List>
        {createListItems()}
      </List>
    </Drawer>
  )
}

export default Navigation