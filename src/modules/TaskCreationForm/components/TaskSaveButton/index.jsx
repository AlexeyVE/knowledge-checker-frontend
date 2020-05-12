import React,{ Fragment } from 'react'
import { Form, Button, Space } from 'antd'

import './taskSaveButton.scss'

const TaskSaveButton = () => {
  return (
    <Fragment>
      <Form.Item
        className="task-save-button"
        wrapperCol={{ span: 16, offset:8}}>
        <Button htmlType = "submit">
          Зберегти
        </Button>
      </Form.Item>
    </Fragment>
  )
}

export default TaskSaveButton