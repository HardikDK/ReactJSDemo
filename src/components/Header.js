import '../App.css';
import { Link } from 'react-router-dom';
function Header() {
  return(  
    <div className="header">
      <a href="#default" className="logo">CompanyLogo</a>
      <div className="header-right">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;