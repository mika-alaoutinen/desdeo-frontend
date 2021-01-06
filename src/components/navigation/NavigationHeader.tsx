import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'

import { home } from './navigationConstants'

const style: React.CSSProperties = {
  color: 'inherit',
  flex: 1,
  textDecoration: 'none'
}

const NavigationHeader: React.FC = () => (
  <Typography
    component={Link}
    style={style}
    to={home}
    variant='h4'
  >
    DESDEO
  </Typography>
)

export default NavigationHeader