import React from 'react';
import styled from 'styled-components'
import cartIcon from '../../assets/cart_icon.png'
import useCartStore from './../../store/cart';

const MobileNav = () => {
  const mobileCartOpen = useCartStore(state => state.mobileCartOpen)
  const toggleMobileCart = useCartStore(state => state.toggleMobileCart)
  return (
    <Container isOpen={mobileCartOpen}>
      <div className="mobile-cart-button open" onClick={toggleMobileCart}>
        <img src={cartIcon} alt="cart-icon"></img>
      </div>
      <div className="mobile-cart-button close" onClick={toggleMobileCart}>
        <span alt="cross-icon">✖</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .mobile-cart-button {
    position: fixed;
    top: 12px;
    right: 12px;
    z-index: 9;

    background: ${({theme}) => theme.colors.pink};
    width: 50px;
    height: 50px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;

    img {
      width: 25px;
      height: 25px;
      object-fit: contain;
      object-position: center;
    }
    &.open {
      display: ${({isOpen}) => isOpen ? `none` : `flex`};
    }
    &.close {
      display: ${({isOpen}) => isOpen ? `flex` : `none`};
      
      font-size: 32px;
      background: none;
      color: black;
      line-height: 0;
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }

`

export default MobileNav;