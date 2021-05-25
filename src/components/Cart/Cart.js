import React, { useCallback } from 'react';
import styled from 'styled-components'

import { products } from '../../data/products.json'
import useCartStore from './../../store/cart';
import CartItemQty from './CartItemQty';
import CartTotalPrice from './CartTotalPrice';

const Cart = () => {
  const cartItems = useCartStore(state => state.cartItems)

  return (
    <Container>
      <h2 className="header">CART</h2>
      <div className={"items"}>
      {
        cartItems
        .sort((a, b) => (a.id > b.id) ? 1 : -1)
        .map((item) => <CartItem key={item.id} {...item} />)
      }
      </div>
      <div className="footer">
        <CartTotalPrice />
      </div>
    </Container>
  );
};

const CartItem = ({ id, quantity }) => {
  const product = products.filter(item => item.id === id);
  const removeFromCart = useCartStore(state => state.removeFromCart)
  const handleRemove = useCallback(() => removeFromCart(product[0].id), [id])

  if (!product.length) return null;

  return <div className="cart-item">
    <img className="thumbnail" src={product[0].image.src} alt={product[0].image.alt} />
    <div className="quantity">
      <CartItemQty id={id} quantity={quantity}/>
    </div>
    <div className="body">
      <p>{product[0].title}</p>
      <a href=""><small>Customize</small></a>
    </div>
    <div className="end">
      <small className="price"><b>${product[0].price}</b></small>
      <div className="remove" onClick={handleRemove}>&#10005;</div>
    </div>
  </div>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;

  .header {
    position: relative;
    text-align: left;
    font-size: 44px;
    margin: 0;
    display: inline-block;

    &:before {
      content: "";
      width: 110px;
      height: 10px;
      background: teal;
      border-radius: 10px;
      display: inline-block;
      position: absolute;
      left: 0;
      bottom: 8px;
      z-index: -1;
    }
  }

  .items {
    border-top: 2px solid lightgray;
    border-bottom: 2px solid lightgray;
    padding: 25px 0;
  }
  
  .cart-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;

    .thumbnail {
      width: 40px;
      height: 40px;

      margin-right: 16px;
    }
    .quantity {
      margin-right: 16px;
      input { 
        border: 1px solid grey;
        border-radius: 10px;
        width: 40px; height: 40px;
        text-align: center;

        font-size: 1.25rem;
        font-weight: bold;
      }

      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type=number] {
        -moz-appearance: textfield;
      }
    }
    .body {
      margin-right: 16px;
      flex: 1 0 auto;
      text-align: left;

      p { margin: 0; }
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

      cursor: pointer;
    }
  }
`

export default Cart;