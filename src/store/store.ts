import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import coordinates from './coordinates/coordinateReducer'
import desdeo from './desdeo/desdeoReducer'
import dataset from './dataset/datasetReducer'
import selectedDataset from './dataset/selectedDatasetReducer'

export const reducer = combineReducers({
  coordinates,
  dataset,
  selectedDataset,
  desdeo,
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store