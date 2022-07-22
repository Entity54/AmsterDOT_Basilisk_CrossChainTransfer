import React, { Fragment, useContext, useState } from 'react'

import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../context/ThemeContext'

import T54 from '../../../icons/crypto/T54.png'

const NavHader = ({ blockHeader }) => {
  const [toggle, setToggle] = useState(false)
  const { navigationHader, openMenuToggle, background } = useContext(
    ThemeContext,
  )
  return (
    <div className="nav-header">
      <div
        className="nav-control"
        onClick={() => {
          setToggle(!toggle)
          openMenuToggle()
        }}
      >
        <div className={`hamburger ${toggle ? 'is-active' : ''}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  )
}

export default NavHader
