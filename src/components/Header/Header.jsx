import React from 'react'
import tinder from '../../UI/Images/tinder.svg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <img src= {tinder}/> <h1>tinder v2.0</h1>
    </div>
  )
}

export default Header