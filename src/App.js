import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import './App.css';
import ProductPage from './pages/ProductPage';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Cart/>
      <NavMenu/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products/:handle' element={<ProductPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
