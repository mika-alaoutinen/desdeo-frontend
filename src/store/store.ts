import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import coordinates from './coordinates/coordinateReducer'
import dataset from './dataset/datasetReducer'
import selectedDataset from './dataset/selectedDatasetReducer'

export const reducer = combineReducers({
  coordinates,
  dataset,
  selectedDataset,
})

export const store = createStore(reducer, composeWithDevTools())

export default store
