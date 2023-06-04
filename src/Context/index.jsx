import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children}) => {

// Shopping cart: Increment quantity and 
  const [count, setCount] = useState(0);

// Shoping Cart: Add Product
  const [cartProducts, setCartProducts] = useState([]);

// Shoping cart: Order
const [order, setOrder] = useState([]);


  
  //Open Close Product
  const [isProductDetailOpen, setIsProductOpen] = useState(false);
  const openProductDetail = () => setIsProductOpen(true)
  const closeProductDetail = () => setIsProductOpen(false)

  //Open Close Checkout Side Menu
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  //Product Detail Show Product
  const [productToShow, setProductToShow] = useState({});


  
  return(
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      productToShow,
      setProductToShow,
      cartProducts, 
      setCartProducts,
      order,
      setOrder
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

