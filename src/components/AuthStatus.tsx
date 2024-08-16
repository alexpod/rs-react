import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

const AuthStatus  = ({}) => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.signout(() => {
      navigate('/')
    })
  }

  if (auth.user === null) return <Link to={'/login'}>Login</Link>

  return (
    <>
      <span className='header__auth-name'></span>
      <div className="header__dropdown dropdown">
        <div className='dropdown__item'>
          <span className='dropdown__item-name'>name:</span>
          <span className='dropdown__item-value'>{ auth.user}</span>
        </div>
        <button onClick={ handleLogout }>Logout</button>
      </div>
    </>
  )
}

export default AuthStatus