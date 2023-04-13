import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './UserItemMini.module.css'


const UserItemMini = ({picture, nameFirst, nameLast, age, cell}) => {

    const navigate = useNavigate(); // хук для того, чтобы путь к посту формировался динамически в зависимости от id поста
    
    return (
        <div className={styles.userItemMini__item}>
            <div className={styles.userItemMini__itemPicture}><img className={styles.picture} src={picture} alt='фото' /></div>
            <h3>{nameFirst} {nameLast}, {age} y.o </h3>
            <div className={styles.userItemMini__button}><button onClick={() => navigate(`/user/${cell}`)}>Открыть профиль</button></div>
        </div>
      )
}

export default UserItemMini;