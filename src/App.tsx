import './assets/scss/index.scss'
import './assets/scss/layout.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { episodes } from './data/episode'

import Home from './views/Home'
import NotFound from './views/NotFound'
import Category from './views/Category'
import CategoryItem from './views/CategoryItem'
import { useRoutes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/category/:category/:id?" element={<CategoryItem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
