import React from 'react'
import style from "./home.module.css"
import {Link} from "react-router-dom"

const Homepage = () => {
  return (
    <section id={style.nav}>
             {/* <a href="">Create-USer</a>
             <a href="">Users</a> */}

             <Link to="/">Create-User</Link>
             <Link to="./user">Users</Link>
            
    </section>
  )
}

export default Homepage