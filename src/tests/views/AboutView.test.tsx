import React from 'react'
import { render, screen } from '@testing-library/react'

import { GITHUB_URL } from '../../constants'

import AboutView from '../../views/AboutView'

let container: Element
beforeEach(() => {
  container = render(<AboutView />).container
})

describe('AboutView component is rendered', () => {
  it('component is truthy', () => {
    expect(AboutView).toBeTruthy()
  })
})

describe('AboutView contains a link to GitHub repository', () => {
  it('link is found', () => {
    expect(screen.getByText('link')).toBeTruthy()
  })

  it('link has correct href', () => {
    const href = container
      .querySelector('#github-url')
      ?.getAttribute('href')
    expect(href).toBe(GITHUB_URL)
  })
})