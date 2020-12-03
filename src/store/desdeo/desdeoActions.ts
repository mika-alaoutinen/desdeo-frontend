import { AppThunk } from '../reduxTypes'

import {
  ADD_PARAMETER, ADD_VARIABLE, RUN_ITERATION, Parameter, Variable
} from './desdeoTypes'

import desdeo from '../../services/desdeoService'

export const addVariable = (variable: Variable): AppThunk => async dispatch => {
  const response = await desdeo.addVariable(variable)
  dispatch({
    type: ADD_VARIABLE,
    variable: response
  })
}

export const addParameters = (params: Parameter[]): AppThunk => async dispatch => {
  const parameters = await desdeo.addParameters(params)
  dispatch({
    type: ADD_PARAMETER,
    parameters
  })
}

export const runIteration = (): AppThunk => async (dispatch, getState) => {
  const currentIteration = getState().desdeo
  const iteration = await desdeo.runIteration(currentIteration)
  dispatch({
    type: RUN_ITERATION,
    iteration
  })
}