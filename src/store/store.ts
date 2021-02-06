import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import coordinates from './coordinates/coordinateReducer'
import desdeo from './desdeo/desdeoReducer'
import sets from './sets/setReducer'
import selectedSet from './sets/selectedSetReducer'

export const reducer = combineReducers({
  coordinates,
  desdeo,
  sets,
  selectedSet,
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store