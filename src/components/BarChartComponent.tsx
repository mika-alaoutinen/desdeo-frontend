import React from 'react'

import BarChart from 'desdeo-d3-barchart'
import { useDispatch } from 'react-redux'
import { useVariableValues, useMaxVariable } from '../hooks/barChartHooks'
import { addVariable } from '../store/desdeo/desdeoActions'

const BarChartComponent: React.FC = () => {
  const dispatch = useDispatch()
  const data = useVariableValues()
  const maxVariable = useMaxVariable()
  const size = [500, 500]

  const addNewVariable = (): void => {
    dispatch(addVariable(maxVariable))
  }
  
  return <BarChart props={{
      data,
      size,
      doUpdate: addNewVariable
    }}
  />
}

export default BarChartComponent