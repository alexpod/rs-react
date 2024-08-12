import Home from '../views/Home'
import NotFound from '../views/NotFound'
import Category from '../views/Category'
import CategoryItem from '../views/CategoryItem'
import { useRoutes } from 'react-router-dom'


const routes = useRoutes([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/',
    name: 'Category',
    component: Category,
  },
  {
    path: '/not-found',
    name: 'NotFound',
    component: NotFound,
  },
])