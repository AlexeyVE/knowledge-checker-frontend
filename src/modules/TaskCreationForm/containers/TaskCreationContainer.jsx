import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TaskCreationForm from '../components/TaskCreationForm'
import { setAnswers, createTask } from 'redux/reducers/tasksReducer'

const TaskCreationContainer = (props) => {
  return (
    <TaskCreationForm {...props} />
  )
}

TaskCreationContainer.propTypes = {

}

const mapStateToProps = ({task}) => {
  return {
    answers: task.task_answers,
    code: task.code
  }
}

export default connect(mapStateToProps,{ setAnswers,createTask})(TaskCreationContainer)
