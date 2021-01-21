import React from 'react'
import { render, screen } from '@testing-library/react'

import { GITHUB_URL_COMPONENTS, GITHUB_URL_FRONTEND } from '../../constants'

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

describe('AboutView contains links to GitHub repositories', () => {
  it('links are found', () => {
    expect(screen.getAllByText('link')).toHaveLength(2)
  })

  it('frontend source code link has correct href', () => {
    testHrefs('#github-url-frontend', GITHUB_URL_FRONTEND)
  })

  it('components source code link has correct href', () => {
    testHrefs('#github-url-components', GITHUB_URL_COMPONENTS)
  })
})

const testHrefs = (id: string, expectedHref: string): void => {
  const href = container.querySelector(id)?.getAttribute('href')
  expect(href).toBe(expectedHref)
}