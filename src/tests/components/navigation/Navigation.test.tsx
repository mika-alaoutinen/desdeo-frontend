import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, RenderResult, screen } from '@testing-library/react'

import Navigation from 'components/navigation/Navigation'

let container: Element
beforeEach(() => {
  container = renderWithRouter().container
})

describe('Navigation component is rendered', () => {
  it('component is truthy', () => {
    expect(renderWithRouter()).toBeTruthy()
  })
})

describe('Navigation elements are displayed', () => {
  it('About and Charts buttons are displayed', () => {
    const buttonTexts = ['About', 'Charts']
    buttonTexts
      .map(text => screen.getByText(text))
      .forEach(htmlElement => expect(htmlElement).toBeTruthy())
  })

  it('DESDEO heading text is displayed', () => {
    const heading = screen.getByText('DESDEO')
    expect(heading).toBeTruthy()
  })
})

describe('Navigation elements have links that point to correct hrefs', () => {
  it('About and Charts buttons have links', () => {
    const expectedLinks = ['/about', '/charts']
    Array.from(container.querySelectorAll('nav > a'))
      .map(link => link.getAttribute('href'))
      .forEach(href => expect(expectedLinks).toContain(href))
  })

  it('DESDEO heading has a home link', () => {
    const headingHref = container.querySelector('.desdeo-heading')?.getAttribute('href')
    expect(headingHref).toEqual('/')
  })
})

const renderWithRouter = (): RenderResult =>
  render(
    <Router>
      <Navigation />
    </Router>
  )
