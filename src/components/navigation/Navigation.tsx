import React from 'react'
import { Link } from 'react-router-dom'

import Routes from '../../router/Routes'
import { barchart, home } from '../../constants'

const Navigation: React.FC = () => (
  <div className='navigation'>
    <Routes />

    <nav className='navigation-bar'>
      <Link style={{ paddingRight: '0.5em' }} to={home}>
        Home
      </Link>

      <Link style={{ paddingRight: '0.5em' }} to={barchart}>
        Bar chart
      </Link>
    </nav>
  </div>
)

export default Navigation