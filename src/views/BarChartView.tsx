import React from 'react'
import { useDispatch } from 'react-redux'

import BarChart from 'desdeo-d3-barchart'
import { addVariables } from '../store/desdeo/desdeoActions'
import { Variable } from '../store/desdeo/desdeoTypes'
import { useSelector } from '../store/reduxTypes'

const BarChartView: React.FC = () => {
  const dispatch = useDispatch()
  const variables = useSelector(state => state.desdeo.variables)
  const data = variables.map(variable => variable.value)
  const size = [500, 500]

  const addNewVariable = (): void => {
    const newVariables = variables.concat(createVariable())
    dispatch(addVariables(newVariables))
  }

  const createVariable = (): Variable => ({
    name: 'new1',
    value: findMaxByValue() + 5
  })

  const findMaxByValue = (): number => {
    const values = variables.map(variable => variable.value)
    return Math.max.apply(0, values)
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