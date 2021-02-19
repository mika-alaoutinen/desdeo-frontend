import React from 'react'
import ParallelAxes from 'components/visualizations/parallelAxes/ParallelAxes'
import { createGrid } from 'views/viewUtils'

const ParallelCoordinatesView: React.FC = () => (
  <div className='ParallelCoordinatesView'>
    <h2>Parallel Coordinates filtering</h2>
    {createGrid(<ParallelAxes />)}
  </div>
)

export default ParallelCoordinatesView
