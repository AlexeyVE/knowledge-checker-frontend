import React,{ Fragment } from 'react'
import { Form, Input } from 'antd'

const TaskBody = () => {
  return (
    <Fragment>
      <Form.Item 
        name = {['task','task_body']} 
        label = "Текст завдання"
         rules = {[
          {
            required: true,
            message: 'Це поле не може бути пустим!',
          },
        ]}>
        <Input.TextArea autoSize = {{minRows:6}}/>
      </Form.Item>      
    </Fragment>
  )
}

export default TaskBody