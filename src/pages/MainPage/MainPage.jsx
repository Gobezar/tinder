import React, { useEffect } from 'react'
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'
import styles from './MainPage.module.css'
import ChoiceButtons from '../../components/ChoiseButtons/ChoiceButtons'
import UserItem from '../../components/UserItem/UserItem'
import { useSelector, useDispatch } from 'react-redux'
import {fetchUsers, AddtoHistoryViewList, ShowPrevUser} from '../../redux/slices/fetchUsersSlice'
import MyButton from '../../UI/Button/MyButton'
import Loader from '../../UI/Loader/Loader'




const MainPage = () => {

  const dispatch = useDispatch();
  const {currentUser, status} = useSelector((state) => state.fetchUsersSlice)

  

  async function getUsers() {
    await dispatch(fetchUsers())
    dispatch(AddtoHistoryViewList())
  }


  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      {
            status === 'error'
            ? <div><h3>Не удалось получить данные с сервера. Пожалуйста, повторите попытку позднее</h3></div>
            : status === 'loading' ? <Loader /> : <div className={styles.userInformation}>
            <MyButton onClick={() => dispatch(ShowPrevUser())}> <LeftCircleOutlined /> </MyButton>
            <div className={styles.userSlide}>
              <UserItem
                picture={currentUser.picture.large}
                nameFirst={currentUser.name.first}
                nameLast={currentUser.name.last}
                age={currentUser.dob.age}
                country={currentUser.location.country}
                state={currentUser.location.state}
                email={currentUser.email}
                cell={currentUser.cell} />
              <ChoiceButtons currentUser={currentUser} getUsers={getUsers} />
            </div>
            <MyButton onClick={() => getUsers()} > <RightCircleOutlined /> </MyButton>
          </div>
      }
      
    </div>
  )
}

export default MainPage