import './Header.style.scss';
import reactLogo from '../../assets/react.svg';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <nav>
            <ul>
              <li><a href="#">Sign In</a></li>
              <li><a href="#">Sign Up</a></li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;