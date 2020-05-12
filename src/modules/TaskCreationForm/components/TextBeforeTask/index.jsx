import React, { Fragment } from 'react'
import { Form, Input } from 'antd'
const TextBeforeTask = () => {

  return (
    <Fragment>
      <Form.Item
        name = {['task', 'text_before_task']} label = "Текст перед завданням">
        <Input.TextArea autoSize = {{ minRows: 2 }} />
      </Form.Item>    
    </Fragment>
  )
}

export default TextBeforeTask