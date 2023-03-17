import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useContext } from 'react'
import { CartContext } from '../context/ShopingCartContext'

const ItemCount = ({stock, name, price, id}) => {
    const [numero, setNumero] = useState(1)
    const {cart, setCart} = useContext(CartContext)

    const isInCart = () =>{
      const exist = cart.findIndex((item) => item.id === id);
      return exist
    } 
    const addCart = () => {
      let items = [...cart];
      const newItem = { name, price, id, quantity: numero }; 
    
      if (isInCart() !== -1) {
        items[isInCart()].quantity += numero;
      } else {
        items.push(newItem);
      }
    
      setCart(items);
      setNumero(1);
    };
  return (
    <div>
      <button type="button" className="btn btn-success" onClick={() => numero === stock ? (Swal.fire({title: `${stock} es el maximo de productos disponibles`, icon: 'error'})):(setNumero(numero + 1 ))}>+</button>
      {numero}
      <button type="button" className="btn btn-success" onClick={() => numero === 1 ? (Swal.fire({title: 'Esta es la cantidad minima', icon: 'error'})):(setNumero(numero - 1 ))}>-</button>
      <button type="button" className="btn btn-danger" onClick={() => setNumero(1)}>Reiniciar</button><br /> <br />
      <button type="button" className="btn btn-info" onClick={async() => {addCart()}}>Add Cart</button>
    </div>
  )
}

export default ItemCount