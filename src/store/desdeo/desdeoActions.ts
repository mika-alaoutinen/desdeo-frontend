import { AppThunk } from '../reduxTypes'

import {
  ADD_PARAMETERS, ADD_VARIABLES, RUN_ITERATION, Parameter, Variable
} from './desdeoTypes'

import desdeo from '../../services/desdeoService'

export const addVariables = (vars: Variable[]): AppThunk => async dispatch => {
  const variables = await desdeo.addVariables(vars)
  dispatch({
    type: ADD_VARIABLES,
    variables
  })
}

export const addParameters = (params: Parameter[]): AppThunk => async dispatch => {
  const parameters = await desdeo.addParameters(params)
  dispatch({
    type: ADD_PARAMETERS,
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