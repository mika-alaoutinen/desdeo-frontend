import React, { useState } from 'react'

import { BarChartComponent } from 'desdeo-components'
import { testdata } from '../../misc/testdata'

const BarChart: React.FC = () => {
  const [ data, setData ] = useState(testdata)

  return (
    <BarChartComponent
      data={data}
      eventHandler={{
        type: 'USE_STATE',
        callback: setData
      }}
    />
  )
}

export default BarChart