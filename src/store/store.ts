import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import desdeo from './desdeo/desdeoReducer'
import input from './userInput/inputReducer'

export const reducer = combineReducers({
  desdeo,
  input
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store