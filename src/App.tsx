import './assets/scss/index.scss'
import './assets/scss/layout.scss'
import { Route, Routes } from 'react-router-dom'
// import Header from './components/Header'

import Home from './views/Home'
import Login from './views/Login'
import NotFound from './views/NotFound'
import Category from './views/Category'
import CategoryItem from './views/CategoryItem'
import { AuthProvider } from './context/AuthProvider'
import MainLayout from './layout/MainLayout'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <AuthProvider>
      {/* <Header /> */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/category/:category" element={<PrivateRoute><Category /></PrivateRoute>} />
          <Route path="/category/:category/:id?" element={<PrivateRoute><CategoryItem /></PrivateRoute>} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
