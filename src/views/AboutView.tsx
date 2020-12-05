import React from 'react'
import { githubLink } from '../misc/constants'

const AboutView: React.FC = () => (
  <div className='About'>
    <h2>About DESDEO</h2>
    
    <p>Add information about using DESDEO here.</p>

    Source code: <a
      href={githubLink}
      rel='noopener noreferrer'
      target='_blank'
      >
        link
    </a>
  </div>
)

export default AboutView