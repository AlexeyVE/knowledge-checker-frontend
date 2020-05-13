import React, { useState } from 'react'
import { NavLink, withRouter,Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import {connect} from 'react-redux'
import { HomeOutlined } from '@ant-design/icons'

import './navLinks.scss'

const NavLinks = ({...props}) => {
  const [active, setActive] = useState(false)
  
  return (
    <Row>
      <Col span={14} push={5}>
        <nav className="app--nav">
          <ul className="app--nav-list">
            <li className = "app--nav-list-item">
              <NavLink to="/" isExact activeClassName="item-selected">
                Головна
              </NavLink>
            </li>
            <li className = "app--nav-list-item">
              <NavLink to="/departments" isExact activeClassName="item-selected" >
                Підрозділи
              </NavLink>
            </li>
          
            <li className = "app--nav-list-item">
              <NavLink to="/tasks-formation"  isExact activeClassName="item-selected" >
                Формування тесту
              </NavLink>
            </li>
            <li className = "app--nav-list-item">
              <NavLink to="/create-task" isExact activeClassName="item-selected" >
                Поповнення банку тестів
              </NavLink>
            </li>
            <li className = "app--nav-list-item">
              <NavLink to="/results" isExact activeClassName="item-selected">
                Результати
              </NavLink>
            </li>
          </ul>
        </nav>
    </Col>
  </Row>
  )
}

const mapStateToProps =(state) => {
  return { 
    state
  }
}
export default withRouter(connect(mapStateToProps)(NavLinks))