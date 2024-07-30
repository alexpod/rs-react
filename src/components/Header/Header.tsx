import { useState } from 'react'
import './Header.style.scss';
import reactLogo from '../../assets/react.svg';


const Header = ({ onMenuClick }: { onMenuClick: Function}) => {
  const [ active, setActive ] = useState('signin')

  const handleClick = (item: string) => {
    setActive(item)
    onMenuClick(item)
  }
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <nav>
            <ul>
              <li><a href="#" className={active === 'signin' && 'active'} onClick={() => handleClick('signin')}>Sign In</a></li>
              <li><a href="#" className={active === 'signup' && 'active'} onClick={() => handleClick('signup')}>Sign Up</a></li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;