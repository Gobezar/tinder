import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './UI/Navigation/Navigation';
import LikedPage from './pages/LikedPage/LikedPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import MainPage from './pages/MainPage/MainPage';
import NotFoundPage from './pages/NotFoundPage'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HistoryViewPage from './pages/HistoryViewPage/HistoryViewPage';
import MyProfile from './pages/MyProfilePage/MyProfile';
import  Header  from './components/Header/Header';

import './styles/global.css'
import { UserItemPage } from './pages/UserItemPage/UserItemPage';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/history' element={<HistoryViewPage />}/>
          <Route path='/liked' element={<LikedPage />} />
          <Route path='/myprofile' element={<MyProfile />}/>
          <Route path="/user/:cell" element={<UserItemPage />} />  
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Navigation />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
