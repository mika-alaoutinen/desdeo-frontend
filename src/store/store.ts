import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import data from './data/dataReducer'
import desdeo from './desdeo/desdeoReducer'
import input from './userInput/inputReducer'

export const reducer = combineReducers({
  data,
  desdeo,
  input
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store