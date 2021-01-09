import React from 'react'

import { GITHUB_URL } from '../constants'

const AboutView: React.FC = () => (
  <div className='AboutView'>
    <h2>About DESDEO</h2>

    <p>Add information about using DESDEO here.</p>

    Source code: <a
      id='github-url'
      href={GITHUB_URL}
      rel='noopener noreferrer'
      target='_blank'
      >
        link
    </a>
  </div>
)

export default AboutView