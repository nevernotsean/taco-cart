import styled from 'styled-components'
import Cart from './../Cart/Cart';
import MobileNav from '../MobileNav/MobileNav';
import Product from '../Product/Product';

import useCartStore from './../../store/cart';
import { products } from '../../data/products.json'

import { GlobalStyle } from '../../theme';
import { theme } from './../../theme';
import {ThemeProvider} from 'styled-components'

function App() {
  const mobileCartOpen = useCartStore(state => state.mobileCartOpen)

  return (
    <ThemeProvider theme={theme}>
      <Container className="App">
        <MobileNav />
        <div className="products">
          {products.map((props) => <Product {...props} key={props.id} />)}
        </div>
        <Cart />
      </Container>
      <GlobalStyle mobileCartOpen={mobileCartOpen}/>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;

  .products {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

export default App;
