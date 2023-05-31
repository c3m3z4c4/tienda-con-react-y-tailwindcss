import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import Signin from '../SignIn';
import Navbar from '../../Components/Navbar';


import './App.css'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> }, 
    { path: '/my-account', element: <MyAccount /> }, 
    { path: '/my-order', element: <MyOrder /> }, 
    { path: '/my-orders', element: <MyOrders /> }, 
    { path: '/signin', element: <Signin /> }, 
    { path: '/*', element: <NotFound /> }, 
  ])

  return routes

}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
