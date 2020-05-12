import React,{ useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Form, Row, Col,Divider, notification } from 'antd'
import { CheckCircleTwoTone, CloseCircleOutlined } from '@ant-design/icons'

import { validateMessages } from 'helpers'

import {
 TaskComplexity,
 TaskType,
 TaskBody,
 TextBeforeTask,
 TaskSaveButton,
 TaskAnswers
} from '../'

const TaskCreationForm = ({createTask, answers, setAnswers, code}) => {
  const taskLayout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  }
  const onFinish = ({task}) => { 
    createTask({...task, answers:[...answers]})
  }
  useEffect(() => {
    if (code === 201) { 
      notification.open({
        message: "Завдання додано!",
        icon: <CheckCircleTwoTone twoToneColor="#52c41a"/>
    })} 
    else if (code=== 500) {
      notification.open({
      message: "Cталася помилка!",
      icon: <CloseCircleOutlined style={{ color: '#ff4d4f' }}/>
    })}    
  },[code])
  return (
    <Row >
      <Col span={12}>
        <Form {...taskLayout} 
          name = "task-creation-form" 
          onFinish = {onFinish} 
          validateMessages = {validateMessages}>
          <TaskComplexity />
          <TaskType />
          <TextBeforeTask />
          <TaskBody />
          <TaskSaveButton />
        </Form>
      </Col>
      <Col span={10} push={1}>
        <TaskAnswers 
          answers = {answers}
          setAnswers = {setAnswers}/>
      </Col>
    </Row>    
  )
}

TaskCreationForm.propTypes = {
  TaskComplexity: PropTypes.number,
  TaskType: PropTypes.string
}

export default TaskCreationForm