import { NavLink, Link } from 'react-router-dom'
import logo from '../../public/img/logo.svg'

const Header = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to={'/'}>
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>
        <div className="header__nav">
          <div className="header__nav-item"><NavLink to={'/category/characters'}>Characters</NavLink></div>
          <div className="header__nav-item"><NavLink to={'/category/episodes'}>Episode</NavLink></div>
          <div className="header__nav-item"><NavLink to={'/category/locations'}>Location</NavLink></div>
        </div>
        <div className="header__auth"></div>
      </div>
    </header>
  )
}

export default Header