import {createContext} from 'react'
import { useState } from "react";

export const CartContext = createContext(null)
const ShopingCartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
  return (
    <CartContext.Provider  value = {{cart, setCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default ShopingCartContextProvider