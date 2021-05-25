import {createGlobalStyle} from 'styled-components'
export const theme = {
  colors: {
    background: "#eee",
    pink: "#df4662",
    teal: "teal"
  }
}

export const GlobalStyle = createGlobalStyle`
  ${({mobileCartOpen}) => mobileCartOpen && `
    html, body { overflow: hidden; }
  `}
`