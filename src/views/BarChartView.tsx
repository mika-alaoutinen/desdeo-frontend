import React from 'react'
import { useDispatch } from 'react-redux'

import BarChart from 'desdeo-d3-barchart'
import { addVariable } from '../store/desdeo/desdeoActions'
// import { createVariable } from '../components/barChart/dataTransformations'
import { useMaxVariable, useVariableValues } from '../hooks/barChartHooks'
import { Variable } from '../store/desdeo/desdeoTypes'

const BarChartView: React.FC = () => {
  const dispatch = useDispatch()
  const data = useVariableValues()
  const maxVariable = useMaxVariable()
  const size = [500, 500]

  const addNewVariable = (): void => {
    const newVariable: Variable = {
      name: 'new1',
      value: maxVariable.value + 5
    }
    dispatch(addVariable(newVariable))
  }

  return (
    <div>
      <h2>Bar chart page</h2>
      <BarChart props={{
          data,
          size,
          doUpdate: addNewVariable
        }}
      />
    </div>
  )
}

export default BarChartView