import "./App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='App'>
      <header className='header'>
        <div style={{ marginLeft: "15px" }}>
          <h1>
            <Link to='/' className='logo'>
              Fashion
            </Link>
          </h1>
        </div>

        <div className='header-links'>
          <ul>
            <li>
              <Link to='/home'>home</Link>
            </li>
            <li>
              <Link to='/cart'>Cart</Link>
            </li>
            <li>
              <Link to='/aboutus'>About Us</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
