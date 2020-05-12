import React, { Fragment } from 'react'
import { Form, InputNumber } from 'antd'

const TaskComplexity = () => {
  return (
    <Fragment>
      <Form.Item
        name = {['task', 'task_complexity']}
        label = "Складність"
        hasFeedback 
        rules = {[
          { 
            required: true,
            type: 'number',
            min: 1,
            max: 3,
          },
        ]}
        >
        <InputNumber/>
      </Form.Item>
    </Fragment>  
  )
}

export default TaskComplexity