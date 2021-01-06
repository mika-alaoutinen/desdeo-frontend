import { useDispatch } from 'react-redux'
import { Datum } from 'desdeo-components/build/types/dataTypes'
import { OnSelectHandler } from 'desdeo-components/build/types/eventTypes'

import { selectData } from '../store/data/dataActions'
import { DataAction } from '../store/data/dataTypes'

export const useReduxSelectHandler = (): OnSelectHandler => {
  const dispatch = useDispatch()

  return {
    type: 'REDUX',
    fn: (selected: Datum[]): DataAction => dispatch(selectData(selected))
  }
}