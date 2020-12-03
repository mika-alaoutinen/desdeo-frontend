import { AppThunk } from '../reduxTypes'

import {
  ADD_PARAMETER, ADD_VARIABLE, RUN_ITERATION, Parameter, Variable
} from './desdeoTypes'

import desdeo from '../../services/desdeoService'

export const addVariable = (newVar: Variable): AppThunk => async dispatch => {
  const variable = await desdeo.addVariable(newVar)
  dispatch({
    type: ADD_VARIABLE,
    variable
  })
}

export const addParameter = (newParam: Parameter): AppThunk => async dispatch => {
  const parameter = await desdeo.addParameters(newParam)
  dispatch({
    type: ADD_PARAMETER,
    parameter
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