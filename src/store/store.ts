import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import coordinates from './coordinates/coordinateReducer'
import sets from './sets/setReducer'
import selectedSet from './sets/selectedSetReducer'
import desdeo from './desdeo/desdeoReducer'

export const reducer = combineReducers({
  coordinates,
  sets,
  selectedSet,
  desdeo,
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store