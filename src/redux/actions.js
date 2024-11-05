import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, MARK_COMPLETED, MARK_INCOMPLETED, MARK_ALL_COMPLETED, FILTER_TODO, UPDATE_SEARCH_TERM } from './actionTypes'

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text }
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }
})

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id }
})

export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id }
})

export const markIncompleted = (id) => ({
  type: MARK_INCOMPLETED,
  payload: { id }
})

export const markAllCompleted = (id) => ({
  type: MARK_ALL_COMPLETED,
  payload: { id }
})

export const filterTodos = (filter) => ({
  type: FILTER_TODO,
  payload: { filter }
})

export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm }
})


