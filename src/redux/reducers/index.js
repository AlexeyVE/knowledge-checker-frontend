import { combineReducers } from 'redux'
import task from './tasksReducer'
import department from './departmentsReducer'

export default combineReducers({
  task,
  department
})