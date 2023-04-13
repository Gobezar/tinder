import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import styles from './UserItemPage.module.css'

export const UserItemPage = () => {

    const navigate = useNavigate();
    const { cell } = useParams()
    const users = useSelector((state) => state.fetchUsersSlice.historyViewList)
    const filtered = users.filter((item) => item.cell === cell) // фильтрация для получения кликнутого пользователя 



  return (
    <>
    <div className={styles.user__information}>
    <div className={styles.user__information__button}><button onClick={() => navigate(-1)}>Вернуться назад</button></div>
    <div>
    <img style={{width: '200px'}} src={filtered[0].picture.large} alt='avatar'/>
    <p><span>Имя: </span>{filtered[0].name.first}</p>
    <p><span>Фамилия: </span>{filtered[0].name.last}</p>
    <p><span>Пол: </span>{filtered[0].gender}</p>
    <p><span>Возраст: </span>{filtered[0].dob.age}</p>
    <p><span>Проживает: </span> {filtered[0].location.country}, {filtered[0].location.state}, {filtered[0].location.street.name} st., {filtered[0].location.street.number}</p>
    <p><span>Почта: </span>{filtered[0].email}</p>
    <p><span>Телефон: </span>{filtered[0].phone}</p>
    <p><span>Зарегистрирован(а) на сайте: </span>{filtered[0].registered.date}</p>
    </div>  
</div>
</>

  )
}
