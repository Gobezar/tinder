import React from 'react'
import { IoStar, IoHeart, IoEye, IoPersonCircle } from "react-icons/io5"
import styles from './Navigation.module.css'
import { Link } from "react-router-dom";


const Navigation = () => {
  return (
    <div className={styles.NavMenu}>
      <Link to='/favorites' className={styles.NavMenuItem}><span><IoStar /></span> <p>Избранное</p></Link>
      <Link to='/liked' className={styles.NavMenuItem}><span><IoHeart /></span> <p>Мне нравится</p>  </Link>
      <Link to='/history' className={styles.NavMenuItem}><span><IoEye /></span> <p>История просмотров</p></Link>
      <Link to='/myprofile' className={styles.NavMenuItem}><span><IoPersonCircle /></span> <p>Мой профиль</p></Link>
    </div>


  )
}
export default Navigation;