import React from 'react'

import { GITHUB_URL_COMPONENTS, GITHUB_URL_FRONTEND } from '../constants'

const AboutView: React.FC = () => (
  <div className='AboutView'>
    <h2>About DESDEO</h2>

    <p>Add information about using DESDEO here.</p>

    <p>
      Source code: {createLink('github-url-frontend', GITHUB_URL_FRONTEND)}
    </p>

    <p>
      Source code for components: {createLink('github-url-components', GITHUB_URL_COMPONENTS)}
    </p>
  </div>
)

const createLink = (id: string, href: string): JSX.Element =>
  <a
    id={id}
    href={href}
    rel='noopener noreferrer'
    target='_blank'
    >
      link
  </a>

export default AboutView