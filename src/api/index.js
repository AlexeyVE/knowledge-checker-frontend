import instance from './config'

export const tasksApi = {
  create: (data) => {
    return instance.post('/create-task', data)
  } 
}

export const departmentsApi = {
  create: (data) => {
    return instance.post('/create-department', data)
  }
}