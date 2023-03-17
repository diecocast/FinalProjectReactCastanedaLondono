import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/ShopingCartContext'
import '../css/style.css'

const CartWidget = () => {
  const { cart, setCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(cart);
  let numproducts = cartItems.length;

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);


  const getTotal = () =>{
    let total = 0
    cart.map((item) =>{ let result = item.quantity * item.price 
                                  total = total + result})
    return total
  }

  const deleteProduct = (idDelete) =>{
    const exist = cartItems.filter((item) => item.id !== idDelete);
    setCart(exist)
  }

  return (
    <div className="cart-container">					
        <div className="dropdown cart-nav dropdown-slide">
            <a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
            className="tf-ion-android-cart"></i><img src="/src/img/icons/cart.png" alt="Cart" />{numproducts}</a>
            <div id="itemsCart" className="dropdown-menu cart-dropdown">
              {cartItems.map(item =>
                                <div className="product-cart" key={item.id}>
                                  <h4 className="media-heading">{item.name}</h4>
                                  <div className="cart-price">
                                    <span>{item.quantity} x</span>
                                    <span>{item.price}</span>
                                  </div>
                                  <h5><strong>${item.quantity * item.price}</strong></h5>
                                  <button type="button" className="btn btn-danger" onClick={() => deleteProduct(item.id)}>Quitar</button>
                                  <h5>__________________</h5>
                                </div>
                                )}
            {numproducts < 1 ? (<p>No has agregado ningun producto</p>):( <p><b>Total:</b> ${getTotal()} <Link to= '/checkout'><button type="button" className="btn btn-success">Comprar</button></Link></p>)}                
            </div>  
        </div>
    </div>
  )
}

export default CartWidget;