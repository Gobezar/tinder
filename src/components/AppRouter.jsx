import React, {useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logIn } from '../redux/slices/loginSlice';


import LikedPage from '../pages/LikedPage/LikedPage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import HistoryViewPage from '../pages/HistoryViewPage/HistoryViewPage';
import MyProfile from '../pages/MyProfilePage/MyProfile';
import LoginPage from '../pages/LoginPage/LoginPage'
import { UserItemPage } from '../pages/UserItemPage/UserItemPage';
import '../styles/global.css'


const AppRouter = () => {

    const isAuth = useSelector((state) => state.loginSlice.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
      if (localStorage.getItem('auth')) {
        dispatch(logIn())
      }
    }, [])


  return (
    <>
          {isAuth
            ? 
              <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/favorites' element={<FavoritesPage />} />
                <Route path='/history' element={<HistoryViewPage />} />
                <Route path='/liked' element={<LikedPage />} />
                <Route path='/myprofile' element={<MyProfile />} />
                <Route path="/user/:cell" element={<UserItemPage />} />
                <Route path='*' element={<NotFoundPage />} />
              </Routes>
            :
              <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='*' element={<LoginPage />} />
              </Routes>

          }
          </>
  )
}
export default AppRouter