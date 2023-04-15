import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './styles/global.css'
import AppRouter from './components/AppRouter';
import Navigation from './UI/Navigation/Navigation'
import Header from './components/Header/Header';





function App() {


  return (

    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
        <Header />
       <AppRouter />
          <Navigation />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
