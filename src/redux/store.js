import { createStore } from 'redux'
import todoReducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  todoReducers,
  composeWithDevTools());

export default store;
