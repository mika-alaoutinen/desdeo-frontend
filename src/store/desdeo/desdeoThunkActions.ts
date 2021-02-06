import { Action } from 'redux'

import { AppThunk } from '../reduxTypes'
import {
  ADD_PARAMETER, ADD_VARIABLE, RUN_ITERATION, Parameter, Variable
} from './desdeoTypes'
import desdeo from '../../services/desdeoService'


const addVariable = (newVar: Variable): AppThunk =>
  async (dispatch): Promise<Action> => {
    const variable = await desdeo.addVariable(newVar)
    return dispatch({
      type: ADD_VARIABLE,
      variable
    })
}

const addParameter = (newParam: Parameter): AppThunk =>
  async (dispatch): Promise<Action> => {
    const parameter = await desdeo.addParameter(newParam)
    return dispatch({
      type: ADD_PARAMETER,
      parameter
    })
}

const runIteration = (): AppThunk =>
  async (dispatch, getState): Promise<Action> => {
    const currentIteration = getState().desdeo
    const iteration = await desdeo.runIteration(currentIteration)
    return dispatch({
      type: RUN_ITERATION,
      iteration
    })
}

export { addVariable, addParameter, runIteration }