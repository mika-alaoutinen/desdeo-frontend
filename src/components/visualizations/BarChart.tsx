import React, { useState } from 'react'

import { BarChartComponent } from 'desdeo-components'
import { testdata } from '../../misc/testdata'
import { EventHandler } from 'desdeo-components/build/types/eventTypes'

const BarChart: React.FC = () => {
  const [ data, setData ] = useState(testdata)

  const eventHandler: EventHandler = {
    type: 'USE_STATE',
    callback: setData
  }
  
  return (
    <BarChartComponent
      data={data}
      eventHandler={eventHandler}
    />
  )
}

export default BarChart