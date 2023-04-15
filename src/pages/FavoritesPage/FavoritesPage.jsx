import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import UserItemMini from '../../components/UserItemMini/UserItemMini';
import styles from './FavoritesPage.module.css'
import MyButton from '../../UI/Button/MyButton';
import { AddtoLikedList, RemoveFromFavoriteList, RemoveAllFavorites } from '../../redux/slices/fetchUsersSlice';
import { HeartOutlined, HeartTwoTone, DeleteOutlined, CloseCircleOutlined } from '@ant-design/icons'



const FavoritesPage = () => {

  const navigate = useNavigate();
  const {favoriteList, likedList} = useSelector((state) => state.fetchUsersSlice)
  const dispatch = useDispatch();


  function PutInLikedList(e) {
    dispatch(AddtoLikedList(e))
}


console.log (favoriteList)


  return (
    <div className={styles.favotiteList}>
    <div className={styles.user__information__button}>
    <button onClick={() => navigate(`/`)}>Вернуться к поиску</button>
    <button onClick={() => navigate(-1)}>Вернуться назад</button>
    </div>
    <div><h2>Вы добавили этих пользователей в избранное:</h2>
      <ul>
      <div className={styles.favotiteList__grid}>
        {favoriteList?.map((f) => (
          <div className={styles.favotiteList__item}>
            <li key={f.cell}><UserItemMini
              cell={f.cell}
              picture={f.picture.large}
              nameFirst={f.name.first}
              nameLast={f.name.last}
              age={f.dob.age} 
              />
            </li>
            <div className={styles.favotiteList__buttons}>
              <div className={styles.choiseButtons__item}><MyButton className={styles.choiseButtons__item} onClick={() => PutInLikedList(f)} > {likedList.includes(f) ? <HeartTwoTone twoToneColor="#0000"/> : <HeartOutlined />} </MyButton></div>
              <div className={styles.choiseButtons__item}><MyButton className={styles.choiseButtons__item} onClick={() => dispatch(RemoveFromFavoriteList(f.email))}> {<CloseCircleOutlined />} </MyButton></div>
            </div>
          </div>
        ))}
        </div>
      </ul>
    </div>
    <div className={styles.removeAllFavorites__button}><button className={styles.choiseButtons__item} onClick={() => dispatch(RemoveAllFavorites())}> {<DeleteOutlined/>} очистить список избранных</button></div>
  </div>
  )
}
export default FavoritesPage;