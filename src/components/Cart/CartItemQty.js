import React, { useCallback } from 'react';
import useCartStore from './../../store/cart';
import styled from 'styled-components'

const CartItemQty = ({ id, quantity }) => {
  const setQty = useCartStore((state) => state.setQty)

  const handleInputChange = useCallback(
    (event) => setQty(event.target.value, id), [id, setQty]
  )

  return (
    <Container>
      <input value={quantity} type="number" onChange={handleInputChange} min={0} />
    </Container>
  );
};

const Container = styled.div`
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
`
export default CartItemQty;