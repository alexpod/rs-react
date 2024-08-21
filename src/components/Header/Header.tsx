import { useState } from 'react'
import './Header.style.scss';
import reactLogo from '../../assets/react.svg';

type FormSignUpProps = {
  onMenuClick: (item: string) => void
}

const Header = ({ onMenuClick }: FormSignUpProps) => {
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
              <li><a href="#" className={active === 'signin' ? 'active' : ''} onClick={() => handleClick('signin')}>Sign In</a></li>
              <li><a href="#" className={active === 'signin' ? 'active' : ''} onClick={() => handleClick('signup')}>Sign Up</a></li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;