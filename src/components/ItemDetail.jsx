import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({product}) => {

  return (
    <div className="product-container my-product-style">
        <div className="product-image my-product-image-style">
            <img src={product.thumbnail} alt="Producto"/>
        </div>
        <div className="product-details my-product-details-style">
            <h2>{product.title}</h2>
            <p className="product-price my-product-price-style">$ {product.price}</p>
            <p className="product-description my-product-description-style">{product.description}</p>
            <p><b>Stock: </b>{product.stock}</p>
            <ItemCount stock ={product.stock}
                       name = {product.title}  
                       price = {product.price}
                       id = {product.id}/>
        </div>
    </div>
    )
}

export default ItemDetail