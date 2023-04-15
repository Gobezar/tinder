import React from 'react'
import styles from './NotFoundPage.module.css'
import { useNavigate } from "react-router-dom";


const NotFoundPage = () => {

  const navigate = useNavigate();


  return (
    <div className={styles.NotFoundPage}>
    <div className={styles.notFoundButtons}>
    <button onClick={() => navigate(`/`)}>Вернуться к поиску</button>
    <button onClick={() => navigate(-1)}>Вернуться назад</button>
    </div>
    <div><p className={styles.notFoundText}>Данная страница не найдена 😢 <br/> Пожалуйста, повторите попыку позднее. </p></div>
    </div>
  )
}

export default NotFoundPage