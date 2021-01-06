import { useDispatch } from 'react-redux'
import { Datum } from 'desdeo-components/build/types/dataTypes'
import { OnClickHandler } from 'desdeo-components/build/types/eventTypes'

import { selectDatum } from '../store/data/dataActions'
import { DataAction } from '../store/data/dataTypes'

export const useReduxClickHandler = (): OnClickHandler => {
  const dispatch = useDispatch()

  return {
    type: 'REDUX',
    fn: (clicked: Datum): DataAction => dispatch(selectDatum(clicked))
  }
}