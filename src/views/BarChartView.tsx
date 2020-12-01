import React from 'react'

import BarChart from 'desdeo-d3-barchart'
import { useSelector } from '../store/desdeo/desdeoTypes'

const BarChartView: React.FC = () => {
  const data = useSelector(state => state.variables)
  const size = [500, 500]

  const emitUpdate = (): void => {
    // Dispatch the update to Redux store
    console.log('update data')
  }

  return (
    <div>
      <h2>Bar chart page</h2>
      <BarChart props={{
          data,
          size,
          doUpdate: emitUpdate
        }}
      />
    </div>
  )
}

export default BarChartView