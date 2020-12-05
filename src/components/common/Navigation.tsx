import React from 'react'
import { Link } from 'react-router-dom'

import { about, barchart, home } from '../../constants'

const Navigation: React.FC = () => (
  <nav>
    <Link style={{ paddingRight: '0.5em' }} to={home}>
      Home
    </Link>

    <Link style={{ paddingRight: '0.5em' }} to={about}>
      About
    </Link>

    <Link style={{ paddingRight: '0.5em' }} to={barchart}>
      Bar chart
    </Link>
  </nav>
)

export default Navigation