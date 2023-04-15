import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import UserItemMini from '../../components/UserItemMini/UserItemMini';
import { RemoveFromLikedList, AddtoFavoriteList, RemoveAllLiked } from '../../redux/slices/fetchUsersSlice';
import MyButton from '../../UI/Button/MyButton';
import { StarOutlined, CloseCircleOutlined, StarTwoTone, DeleteOutlined } from '@ant-design/icons'



import styles from './LikedPage.module.css'



const LikedPage = () => {

  const navigate = useNavigate();


  const { likedList, favoriteList } = useSelector((state) => state.fetchUsersSlice)
  const dispatch = useDispatch();

  console.log(likedList)


  function PutInFavoriteList(e) {
    dispatch(AddtoFavoriteList(e))
  }

  return (
    <div className={styles.likedList}>
      <div className={styles.user__information__button}>
        <button onClick={() => navigate(`/`)}>Вернуться к поиску</button>
        <button onClick={() => navigate(-1)}>Вернуться назад</button>
      </div>
      <div><h2>Эти пользователи Вам понравились:</h2>
        <ul>
          <div className={styles.likedList__grid}>
            {likedList?.map((f) => (
              <div className={styles.likedList__item}>
                <li key={f.cell}><UserItemMini
                  cell={f.cell}
                  picture={f.picture.large}
                  nameFirst={f.name.first}
                  nameLast={f.name.last}
                  age={f.dob.age} />
                </li>
                <div className={styles.likedList__buttons}>
                  <div className={styles.choiseButtons__item}><MyButton className={styles.choiseButtons__item} onClick={() => PutInFavoriteList(f)} > {favoriteList.includes(f) ? <StarTwoTone twoToneColor="#0000" /> : <StarOutlined />} </MyButton></div>
                  <div className={styles.choiseButtons__item}><MyButton className={styles.choiseButtons__item} onClick={() => dispatch(RemoveFromLikedList(f.email))}> {<CloseCircleOutlined />} </MyButton></div>
                </div>
              </div>
            ))}
          </div>
        </ul>
      </div>
      <div className={styles.removeAllLiked__button}><button className={styles.choiseButtons__item} onClick={() => dispatch(RemoveAllLiked())}> {<DeleteOutlined/>} очистить список понравившихся</button></div>
    </div>
  )
}
export default LikedPage