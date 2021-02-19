import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import coordinates from './coordinates/coordinateReducer'
import dataset from './dataset/datasetReducer'

export const reducer = combineReducers({
  coordinates,
  dataset,
})

export const store = createStore(reducer, composeWithDevTools())

export default store
