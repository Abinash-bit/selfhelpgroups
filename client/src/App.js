import logo from './logo.svg';
import './App.css';
import AboutPage from './pages/about/about'
import HomePage from './pages/home/home';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import SignInPage from './pages/signin/signin'
import ProductsPage from './pages/products/products'
import ShgDetailsPage from './pages/shgDetails/shgDetails'
import ProdDetailsPage from './pages/prodDetails/prodDetails'
import LogInPage from './pages/login/login';

function App() {
  return (
    <Router>
    <div>
    <Routes>
      <Route exact path='/' element={< HomePage />}></Route>
      <Route exact path='/home' element={< HomePage />}></Route>
      <Route exact path='/about' element={< AboutPage />}></Route>
      <Route exact path='/products' element={< ProductsPage />}></Route>
      <Route exact path='/signin' element={< SignInPage />}></Route>
      <Route exact path='/login' element={< LogInPage />}></Route>
      <Route exact path='/shgDetails' element={< ShgDetailsPage />}></Route>
      <Route exact path='/prodDetails' element={< ProdDetailsPage />}></Route>
    </Routes>
    </div>

    </Router>
  );
}

export default App;
