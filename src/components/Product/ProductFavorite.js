import React, {useState} from 'react';
import styled from 'styled-components';


const ProductFavorite = () => {
  const [isFavorite, setIsFavorite] = useState();

  return (
    <Container isFavorite={isFavorite}>
      <span onClick={() => setIsFavorite(!isFavorite)}>&hearts;</span>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 12px;
  right: 7px;
  span {
    color: #333;
    opacity: 0.2;
    line-height: 0;
    font-size: 31px;

    user-select: none;
    cursor: pointer;

    ${({isFavorite, theme}) => isFavorite && `
      color: ${theme.colors.pink};
      opacity: 1;
    `}
  }
`

export default ProductFavorite;