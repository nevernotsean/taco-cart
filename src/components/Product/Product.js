import React, { useCallback } from 'react';
import styled from 'styled-components'

import useCartStore from './../../store/cart';
import veganIcon from '../../assets/vegan.png'

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
            { vegan && <img className="icon" src={veganIcon} alt="vegan-icon"/>} 
          </div>
      </div>
      <div className="footer">
        <button className="button" onClick={clickHandler}>
          {/* <img className="icon" src="" alt="cart-icon" />  */}
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
    flex-direction: column;

    text-align: left;
  }

  .title {
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

  .icon {
    width: 25px;
    height: 25px;
  }

  .button {
    padding: 10px 20px;
    border: none;
    box-shadow: none;
    
    background: #df4662;
    color: white;
    font-weight: bold;

    width: 100%;
  }
`

export default Product;