import React from 'react'
import ParallelCoordinates from 'components/visualizations/parallelAxes/ParallelCoordinates'
import { createGrid } from 'views/viewUtils'

const ParallelCoordinatesView: React.FC = () => (
  <div className='ParallelCoordinatesView'>
    <h2>Parallel Coordinates filtering</h2>
    {createGrid(<ParallelCoordinates />)}
  </div>
)

export default ParallelCoordinatesView
