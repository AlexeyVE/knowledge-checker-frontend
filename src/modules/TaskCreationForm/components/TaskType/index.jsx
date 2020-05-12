import React, { Fragment } from 'react'
import { Form, Select } from 'antd'

const TaskType = () => {
  const { Option } = Select

  return (
    <Fragment>
      <Form.Item
        name = {['task','task_type']}
        label = "Виберіть тип завдання"
        hasFeedback
        rules = {[
          {
            required: true,
            message: 'Виберіть тип завдання!',
          },
        ]}
      >
        <Select placeholder="Виберіть тип завдання">
          <Option value = "task_with_one_answer">
            Завдання з одним варіантом відповіді
          </Option>
          <Option value = "task_with_few_answers">
            Завдання з декількома варіантами відповіді
          </Option>
        </Select>
      </Form.Item>
    </Fragment>
  )
}

export default TaskType