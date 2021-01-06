import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BarChartComponent } from 'desdeo-components'
import { Datum } from 'desdeo-components/build/types/dataTypes'

import { useData } from '../../hooks/barChartHooks'
import { addData, selectDatum } from '../../store/data/dataActions'
import { testdata } from '../../tests/testdata'

const BarChart: React.FC = () => {
  const data = useData()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addData(testdata))
  }, [dispatch])
  
  return (
    <BarChartComponent
      data={data}
      onClick={{
        type: 'REDUX',
        fn: (selected: Datum) => dispatch(selectDatum(selected))
      }}
    />
  )
}

export default BarChart