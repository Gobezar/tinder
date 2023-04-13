import React from 'react'
import styles from './UserItem.module.css'
import { useNavigate } from 'react-router-dom';


const UserItem = ({picture, nameFirst, nameLast, age, country, state, email, cell}) => {

  const navigate = useNavigate(); // хук для того, чтобы путь к посту формировался динамически в зависимости от id поста


  return (
    <div className={styles.user__item}>
        <img className={styles.picture} src={picture} alt='фото' />
        <h3>{nameFirst} {nameLast}, {age} y.o </h3>
        <p>{country}, {state}</p>
        <p>{email}</p>
        <button onClick={() => navigate(`/user/${cell}`)}>Открыть профиль</button>
    </div>
  )
}
export default UserItem;