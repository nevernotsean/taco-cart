import React from 'react';
import styled from 'styled-components'

import useCartStore from './../../store/cart';
import CartTotalPrice from './CartTotalPrice';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useCartStore(state => state.cartItems)
  const mobileCartOpen = useCartStore(state => state.mobileCartOpen)

  return (
    <Container isOpen={mobileCartOpen}>
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



const Container = styled.div`
  ${({isOpen}) => isOpen ? `transform: translateX(0)` : `transform: translateX(100%)`};
  transition: transform 500ms ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;

  @media screen and (min-width: 768px) {
    transform: none;
    position: relative;
    width: 520px;
    display: flex;
    top: unset;
    left: unset;
    right: unset;
    bottom: unset;
    background: ${({theme}) => theme.colors.background};
  }

  flex-direction: column;
  
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
      background: ${({theme}) => theme.colors.teal};
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
`

export default Cart;