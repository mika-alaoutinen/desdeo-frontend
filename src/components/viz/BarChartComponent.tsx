import React from 'react'

import BarChart from 'desdeo-d3-barchart'
import { useDispatch } from 'react-redux'
import { useVariableValues, useMaxVariable } from '../../hooks/barChartHooks'
import { reverseVariables } from '../../store/desdeo/desdeoActions'
import { addVariable } from '../../store/desdeo/desdeoThunkActions'

const BarChartComponent: React.FC = () => {
  const dispatch = useDispatch()
  const data = useVariableValues()
  const maxVariable = useMaxVariable()
  const size = [500, 500]

  const addNewVariable = (): void => {
    dispatch(addVariable(maxVariable))
  }

  const reverse = (): void => {
    dispatch(reverseVariables())
  }
  
  return (
    <div>
      <BarChart props={{
          data,
          size,
          doUpdate: addNewVariable
        }}
      />
  
      <BarChart props={{
          data,
          size,
          doUpdate: reverse
        }}
      />
    </div>
  )
}

export default BarChartComponent