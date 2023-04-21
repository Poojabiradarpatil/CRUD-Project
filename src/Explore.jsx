import React from 'react'
import style from './menu.module.css'
import image from './explore.png'

const Explore = () => {
  return (
    <section id={style.exploreblock}>
        <article>
            <div className={style.summary}></div>
            <div className={style.image}>
                <img src={image} alt="" />
            </div>
        </article>
    </section>
  )
}

export default Explore