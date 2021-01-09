import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, RenderResult, screen } from '@testing-library/react'

import Navigation from '../../../components/navigation/Navigation'

describe('Navigation component is rendered', () => {
  it('component is truthy', () => {
    expect(Navigation).toBeTruthy()
  })
})

describe('Navigation elements are displayed and have links', () => {
  it('About and Charts buttons are displayed', () => {
    renderWithRouter()
    const buttonTexts = [ 'About', 'Charts' ]
    buttonTexts
      .map(text => screen.getByText(text))
      .forEach(htmlElement => expect(htmlElement).toBeTruthy())
  })

  it('About and Charts buttons have links', () => {
    const { container } = renderWithRouter()
    const expectedLinks = [ '/about', '/charts' ]

    Array.from(container.querySelectorAll('nav > a'))
      .map(link => link.getAttribute('href'))
      .forEach(href => expect(expectedLinks).toContain(href))
  })

  it('DESDEO heading text is displayed', () => {
    renderWithRouter()
    const heading = screen.getByText('DESDEO')
    expect(heading).toBeTruthy()
  })

  it('DESDEO heading has a home link', () => {
    const { container } = renderWithRouter()
    const headingHref = container
      .querySelector('.desdeo-heading')
      ?.getAttribute('href')
    expect(headingHref).toEqual('/')
  })
})

const renderWithRouter = (): RenderResult =>
  render(
    <Router>
      <Navigation />
    </Router>
  )