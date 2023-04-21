import React from 'react'
import Logo from './Logo'
import style from "./nav.module.css"
import Menu from './Menu'
import Button from './Button'

const Navbar = () => {
  return (
    <section id={style.nav}>
        <article>
            <div className={style.logo}><Logo/></div>
            <div className={style.Menu}><Menu/></div>
            <div className={style.button}><Button/></div>
        </article>
    </section>
  )
}

export default Navbar