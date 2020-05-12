import { tasksApi } from 'api'

const initialState = {
  task_answers: [],
  task_body: {},
  code:''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "TASK:CREATING_TASK":
      return {...state, code: payload }
    case 'TASK:CREATE_TASK_SUCCESS':
      return { ...state, code: payload}
    case 'TASK:CREATE_TASK_ERROR':
      return { ...state, code: payload}  
    case 'TASK:SET_ANSWERS':
      return {...state, task_answers:[...state.task_answers, payload]}
    default:
      return state
  }
}


export const setAnswers = (payload) => ({type:"TASK:SET_ANSWERS", payload})

// const combineData = (payload) => ({type: "TASK:CREATING_TASK", payload})

export const createTask = (data) => dispatch => {
  dispatch({type:"TASK:CREATING_TASK", payload:''})
  tasksApi.create(data)
  .then(res => {
    if (res.status == 201) {
      dispatch({type: "TASK:CREATE_TASK_SUCCESS", payload:res.status})
    }
  }).catch(err => {
    dispatch({type:"TASK:CREATE_TASK_ERROR", payload:err.response.status })    
  }
)}


