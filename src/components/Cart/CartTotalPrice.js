import React from 'react';
import { products } from '../../data/products.json'
import {parsePrice, parseTotalPrice} from './../../utils/parsePrice';
import useCartStore from './../../store/cart';
import styled from 'styled-components'

const CartTotalPrice = () => {
  const cartItems = useCartStore(state => state.cartItems);

  const totalPrice = parseTotalPrice(
    cartItems.map(({id, quantity}) =>  parsePrice(products[id].price) * quantity)
  );

  return (
    <Container>
      <p className="total-label">Order Total</p>
      <p className="total-price">${totalPrice}</p>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  margin-top: 10px;
  padding: 8px;

  .total-label, .total-price { margin: 0}
  .total-price {
    font-size: 1.5rem;
    font-weight: bold;
  }
`
export default CartTotalPrice;