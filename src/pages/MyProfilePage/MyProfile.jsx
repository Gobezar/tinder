import React from 'react'
import avatar from '../../UI/Images/avatar.jpg'
import { useNavigate } from "react-router-dom";
import ModalWindow from '../../components/Modal/ModalWindow';
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../redux/slices/loginSlice'

import styles from './MyProfile.module.css'
import { EditOutlined } from '@ant-design/icons'




const MyProfile = () => {

  const dispatch = useDispatch()
  const userData = useSelector((state) => state.modalSlice.userData)
  const navigate = useNavigate();



  console.log(userData)

  return (
    <div className={styles.myProfile}>
      <div className={styles.myProfile__buttons}>
        <button onClick={() => navigate(`/`)}>Вернуться к поиску</button>
        <button onClick={() => navigate(-1)}>Вернуться назад</button>
      </div>
      <div>
        <h2>Мой профиль</h2>
        <div className={styles.myProfile__info}>
          <div className={styles.myProfile__edit}><ModalWindow header={'Редактировать профиль'} children={<EditOutlined />} /></div>
          <div>
          <img src={avatar} alt='avatar' />
          <p><span>Имя: </span>{userData.name}</p>
          <p><span>Фамилия: </span>{userData.surName}</p>
          <p><span>Пол: </span>{userData.gender}</p>
          <p><span>Возраст: </span>{userData.age}</p>
          <p><span>Место жительства: </span>{userData.location.country}, {userData.location.state}, ул. {userData.location.street}, д. {userData.location.homeNum}</p>
          <p><span>Почта: </span>{userData.email}</p>
          <p><span>Телефон: </span>{userData.phone}</p>

          </div>
        </div>
        <div className={styles.buttonExit}><button onClick={() => dispatch(logOut())}>Выйти</button></div>

      </div>

    </div>
  )
}

export default MyProfile