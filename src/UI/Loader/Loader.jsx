import React from 'react'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <>
    <div className={styles.Loader}>
    </div>
    <div><p className={styles.LoaderText}>Идет загрузка...<br />Пожалуйста, подождите.</p></div>
    </>
  )
}
export default Loader;