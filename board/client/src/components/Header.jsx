import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <ul>
      <li><NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>홈</NavLink></li>
      <li><NavLink to="/board" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>목록</NavLink></li>
    </ul>
  )
}

export default Header