import React from 'react'
import { render, screen } from '@testing-library/react'

import HomeView from '../../views/HomeView'

beforeEach(() => {
  render(<HomeView />)
})

describe('HomeView component is rendered', () => {
  it('component is truthy', () => {
    expect(HomeView).toBeTruthy()
  })
})

describe('View contains a heading', () => {
  it('has a heading', () => {
    expect(screen.getByText('Home page')).toBeTruthy()
  })
})
