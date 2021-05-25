import React, { useCallback } from 'react';
import styled from 'styled-components'

import useCartStore from './../../store/cart';
import veganIcon from '../../assets/vegan.png'
import cartIcon from '../../assets/cart_icon.png'

const Product = ({ id, title, price, image, vegan, calories }) => {
  const addToCart = useCartStore(state => state.addToCart);
  const clickHandler = useCallback(() => addToCart(id), [id,addToCart]);

  return (
    <Container>
      <div className="header">
        <img className="thumbnail" src={image.src} alt={image.alt} />
      </div>
      <div className="body">
        <h2 className="title">{title}</h2>
        <span className="price">${price} | {calories} Cal</span>
        
          <div className="icons">
            { vegan && <img className="icon vegan" src={veganIcon} alt="vegan-icon"/>} 
          </div>
      </div>
      <div className="footer">
        <button className="button" onClick={clickHandler}>
          <img className="icon cart" src={cartIcon} alt="cart-icon" /> 
          Add to Order
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: white;
  margin: 4px;

  .thumbnail {
    width: 100%;
    max-width: 100%;
  }

  .body {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;

    text-align: left;
  }

  .title {
    font-size: 20px;
    margin: 0;
    margin-bottom: .25rem;
  }

  .price {
    margin: 0;
    margin-bottom: .25rem;
  }

  .icons {
    display: flex;
    margin: 5px 0;
    height: 25px;
  }

  .icon.vegan {
    width: 25px;
    height: 25px;
  }

  .icon.cart {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }

  .button {
    padding: 10px 20px;
    border: none;
    box-shadow: none;
    
    background: ${({theme}) => theme.colors.pink};
    color: white;
    font-weight: bold;

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: background 300ms ease;

    &:hover {
      background: ${({theme}) => theme.colors.teal};
    }
  }
`

export default Product;