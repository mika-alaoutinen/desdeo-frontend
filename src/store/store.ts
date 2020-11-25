import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import input from './input/inputReducer'

export const reducer = combineReducers({
  input
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store