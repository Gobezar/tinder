import React from 'react'

import { HeartOutlined, HeartTwoTone, CloseCircleOutlined, StarOutlined, StarTwoTone } from '@ant-design/icons'
import styles from './ChoiseButtons.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AddtoFavoriteList, AddtoLikedList } from '../../redux/slices/fetchUsersSlice';
import MyButton from '../../UI/Button/MyButton';



const ChoiceButtons = ({ currentUser, getUsers }) => {

    const dispatch = useDispatch();
    const {likedList, favoriteList} = useSelector((state) => state.fetchUsersSlice)




    function PutInLikedList(e) {
        dispatch(AddtoLikedList(e))
    }
    function PutInFavoriteList (e) {
        dispatch(AddtoFavoriteList(e))
    }



    return (
        <div className={styles.choiseButtons}>
            <div className={styles.choiseButtons__item}><MyButton onClick={() => PutInLikedList(currentUser)} > {likedList.includes(currentUser) ? <HeartTwoTone twoToneColor="#0000"/> : <HeartOutlined />}  </MyButton></div>
            <div className={styles.choiseButtons__item}><MyButton onClick={() => getUsers()}> {<CloseCircleOutlined />} </MyButton></div>
            <div className={styles.choiseButtons__item}><MyButton onClick={() => PutInFavoriteList(currentUser)} > {favoriteList.includes(currentUser) ? <StarTwoTone twoToneColor="#0000"/>  : <StarOutlined />} </MyButton></div>
        </div>
    )
}
export default ChoiceButtons;
