import styled from 'styled-components'
import Cart from './../Cart/Cart';
import MobileNav from '../MobileNav/MobileNav';

import {products} from '../../data/products.json'
import Product from '../Product/Product';

function App() {
  return (
    <Container className="App">
      <MobileNav/>
      <div className="products">
        {products.map((props) => <Product {...props} key={props.id} />)}
      </div>
      <Cart/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  .products {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

export default App;
