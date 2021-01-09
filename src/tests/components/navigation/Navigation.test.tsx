import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import Navigation from '../../../components/navigation/Navigation'

beforeEach(() => {
  render(
    <Router>
      <Navigation />
    </Router>
  )
})

describe('Navigation component is rendered', () => {
  it('component is truthy', () => {
    expect(Navigation).toBeTruthy()
  })
})

describe('Navigation buttons are created', () => {
  it('About and Charts buttons are displayed', () => {
    const buttonTexts = [ 'About', 'Charts' ]
    buttonTexts
      .map(text => screen.getByText(text))
      .forEach(htmlElement => expect(htmlElement).toBeTruthy())
  })

  it('buttons have links', () => {
    const { container } = render(
      <Router>
        <Navigation />
      </Router>
    )

    const expectedLinks = [ '/about', '/charts' ]
    Array.from(container.querySelectorAll('nav > a'))
      .map(link => link.getAttribute('href'))
      .forEach(href => expect(expectedLinks).toContain(href))
  })
})

describe('DESDEO heading text is displayed', () => {
  it('heading is displayed', () => {
    const heading = screen.getByText('DESDEO')
    expect(heading).toBeTruthy()
  })
})