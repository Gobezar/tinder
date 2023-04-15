import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logIn } from '../../redux/slices/loginSlice'
import MyButton from '../../UI/Button/MyButton'
import MyInput from '../../UI/Input/MyInput'
import styles from './LoginPage.module.css'


const Login = () => {

  const dispatch = useDispatch()


const login = event => {
    event.preventDefault(); // чтобы страница не перезагружалась
    dispatch(logIn())
    localStorage.setItem('auth', 'true')
}

  return (
    <div>
        <h2 className={styles.loginHeader}>Пожалуйста, авторизуйтесь</h2>
        <form onSubmit={login}>
            <MyInput type="text" placeholder="Введите логин"></MyInput>
            <MyInput type="text" placeholder="Введите пароль"></MyInput>
            <button className={styles.loginButton}>Войти</button>
        </form>
        <div className={styles.loginWarning}><p>Это тестовая форма авторизации.<br />
        Введите любые данные, мы сохраним их <br /> в LocalStorage и авторизуем Вас! 😏</p></div>

    </div>
  )
}


export default Login;