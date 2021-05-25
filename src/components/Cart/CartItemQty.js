import React, { useCallback } from 'react';
import useCartStore from './../../store/cart';

const CartItemQty = ({ id, quantity }) => {
  const setQty = useCartStore((state) => state.setQty)

  const handleInputChange = useCallback(
    (event) => setQty(event.target.value, id), [id, setQty]
  )

  return (
    <input value={quantity} type="number" onChange={handleInputChange} min={0}/>
  );
};

export default CartItemQty;