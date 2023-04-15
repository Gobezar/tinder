import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import MyButton from '../../UI/Button/MyButton';
import UserItemMini from '../../components/UserItemMini/UserItemMini';

import { RemoveAllHistoryView, AddtoLikedList, AddtoFavoriteList } from '../../redux/slices/fetchUsersSlice';


import { HeartOutlined, HeartTwoTone, DeleteOutlined, StarOutlined, StarTwoTone, } from '@ant-design/icons'
import styles from './HistoryViewPage.module.css'


const HistoryViewPage = () => {

    const {historyViewList, favoriteList, likedList} = useSelector((state) => state.fetchUsersSlice)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function PutInLikedList(e) {
      dispatch(AddtoLikedList(e))
  }
  function PutInFavoriteList(e) {
    dispatch(AddtoFavoriteList(e))
  }
  

  return (
    <div className={styles.historyViewList}>
    <div className={styles.user__information__button}>
      <button onClick={() => navigate(`/`)}>Вернуться к поиску</button>
      <button onClick={() => navigate(-1)}>Вернуться назад</button>
    </div>
    <div><h2>История просмотров:</h2>
      <ul>
        <div className={styles.historyViewList__grid}>
          {historyViewList?.map((f) => (
            <div className={styles.historyViewList__item}>
              <li key={f.cell}><UserItemMini
                cell={f.cell}
                picture={f.picture.large}
                nameFirst={f.name.first}
                nameLast={f.name.last}
                age={f.dob.age} />
              </li>
              <div className={styles.historyViewList__buttons}>
                <div className={styles.choiseButtons__item}><MyButton className={styles.choiseButtons__item} onClick={() => PutInFavoriteList(f)} > {favoriteList.includes(f) ? <StarTwoTone twoToneColor="#0000" /> : <StarOutlined />} </MyButton></div>
                <div className={styles.choiseButtons__item}><MyButton className={styles.choiseButtons__item} onClick={() => PutInLikedList(f)} > {likedList.includes(f) ? <HeartTwoTone twoToneColor="#0000"/> : <HeartOutlined />} </MyButton></div>
              </div>
            </div>
          )).reverse()}
        </div>
      </ul>
    </div>
    <div className={styles.removeAllHistory__button}><button className={styles.choiseButtons__item} onClick={() => dispatch(RemoveAllHistoryView())}> {<DeleteOutlined/>} очистить историю просмотров</button></div>
  </div>
  )
}

export default HistoryViewPage;