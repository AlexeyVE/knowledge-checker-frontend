import React from 'react'
import { NavLink } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'

import './navLinks.scss'

const NavLinks = () => {
  return (
    <nav className="app--nav">
      <ul className="app--nav-list">
        <li className = "app--nav-list-item">
          <NavLink to="/">Головна</NavLink>
        </li>
        <li className = "app--nav-list-item">
          <NavLink to="/create-task">Формування тесту</NavLink>
        </li>
        <li className = "app--nav-list-item">
          <NavLink to="/create-task">Поповнення банку тестів</NavLink>
        </li>
        <li className = "app--nav-list-item">
          <NavLink to="/">Підрозділи</NavLink>
        </li>
        <li className = "app--nav-list-item">
          <NavLink to="/">Результати</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavLinks