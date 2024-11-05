import { createStore } from 'redux'
import todoReducers from './reducers'

const store = createStore(todoReducers);

export default store;
