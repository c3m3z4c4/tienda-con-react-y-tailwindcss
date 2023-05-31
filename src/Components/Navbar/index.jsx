
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ShoppingBagIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from "../../Context";

const Navbar = () => {

  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-emerald-600 text-emerald-50">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-2xl ">
          <NavLink
              to='/' 
            >
              <span>Menta</span>
              <span className="font-serif">&</span>
              <span>Miel</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'               
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'               
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics' 
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/fornitures' 
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Fornitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys' 
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others' 
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-emerald/60">
          cesar@mentaymiel.com
        </li>
        <li>
          <NavLink
            to='/my-account' 
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-order' 
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            My Order
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-orders' 
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/signin' 
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center justify-center">
            <ShoppingBagIcon className="h-6 w-6 text-white"/>
            <div>
              {context.count}
            </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
