import { departmentsApi } from 'api'

const initialState = {
  departments:[],
  code: Number
}

export default (state = initialState, { type, payload }) => {
  
  switch (type) {
  case "DEPARTMENT:CREATE_DEPARTMENT":
    return {...state, code: payload }
  case "DEPARTMENT:CREATE_DEPARTMENT_SUCCESS":
    return { ...state, code: payload }
  default:
    return state
  }
}

export const createDepartment = (data) => dispatch => {
  dispatch("DEPARTMENT:CREATE_DEPARTMENT", payload:'')
  departmentsApi.create(data)
  .then(res => 
    dispatch({type:"DEPARTMENT:CREATE_DEPARTMENT_SUCCESS", payload:res.status}))
} 
  