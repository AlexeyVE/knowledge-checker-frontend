import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form, Input,Button} from 'antd'
import { PlusOutlined} from '@ant-design/icons';

import './departmentCreator.scss'

const DepartmentCreator = props => {
  const [state, setState] = useState('')
  const onInputChange = (e) => {
    setState(e.target.value)
  }
  console.log(state)
  return (
    <Row>
      <Col span={8} style = {{paddingLeft:20}}>
        <div className = "unit--creator">
          <span className = "unit--creator-title">
            Створити підрозділ
          </span>
          <Input
            onChange={onInputChange}
            value={state}
            name = "add-unit-input"
            placeholder = "Введіть назву підрозділа "
            addonAfter = {
              <Button
                style={{border:'none'}} 
                type = "link" 
                icon = {
                  <PlusOutlined/>
                }/>}/>
        </div>
      </Col>
      <Col span = {8}></Col>
      <Col span = {8}></Col>
    </Row>
  )
}

DepartmentCreator.propTypes = {

}

export default DepartmentCreator