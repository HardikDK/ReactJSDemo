import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Products from './components/Products.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
