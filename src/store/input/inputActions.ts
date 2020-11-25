import { AppThunk } from '../reduxTypes'

import { GET_INPUTS } from './inputTypes'
import desdeo from '../../services/desdeoService'

export const getInputs = (): AppThunk => async dispatch => {
  const inputs = await desdeo.getInputs()

  if (inputs) {
    dispatch({
      type: GET_INPUTS,
      inputs
    })
  }
}