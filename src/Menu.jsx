import React from 'react'
import style from "./nav.module.css"
import {Link} from "react-router-dom"

const Menu = () => {
  return (
    <div id={style.menublock}>
      <ol>
        <li><Link to="/explore">Explore Work</Link></li>
        <li><Link to="/hire">Hire Talents</Link></li>
        <li><Link to="/dev">Dev board</Link></li>
        <li><Link to="/challenge">Challenges</Link></li>
      </ol>
    </div>
  )
}

export default Menu