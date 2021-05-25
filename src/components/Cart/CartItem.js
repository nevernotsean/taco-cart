import React, { useCallback } from 'react';
import styled from 'styled-components'

import { products } from '../../data/products.json'
import useCartStore from './../../store/cart';
import CartItemQty from './CartItemQty';

const CartItem = ({ id, quantity }) => {
  const product = products.filter(item => item.id === id);
  const removeFromCart = useCartStore(state => state.removeFromCart)
  const handleRemove = useCallback(() => removeFromCart(product[0].id), [id])

  if (!product.length) return null;

  return <Container className="cart-item">
    <img className="thumbnail" src={product[0].image.src} alt={product[0].image.alt} />
    
    <CartItemQty id={id} quantity={quantity}/>
    
    <div className="body">
      <p>{product[0].title}</p>
      <small>Customize</small>
    </div>
    
    <div className="end">
      <small className="price"><b>${product[0].price}</b></small>
      <div className="remove" onClick={handleRemove}>&#10005;</div>
    </div>
  </Container>
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 0;

    .thumbnail {
      width: 40px;
      height: 40px;

      margin-right: 16px;
    }

    .body {
      margin-right: 16px;
      flex: 1 1 auto;
      text-align: left;

      p { margin: 0; }

      small {
         color: ${({theme}) => theme.colors.teal};
         cursor: pointer;
      }
    }

    .end {display: flex;}

    .price {
      margin-right: 8px;
    }
    .remove {
      display: flex;
      justify-content: center;
      align-items: center;
      
      background: grey;
      color: white;
      border-radius: 100%;
      height: 20px;
      width: 20px;
      font-size: 8px;
      line-height: 0;

      cursor: pointer;
    }
`

export default CartItem;