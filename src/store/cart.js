import create from 'zustand'
import { products } from '../data/products.json'

const INITIAL_STATE = {
  cartItems: [
    {
      id: 5,
      quantity: 1
    },
    {
      id: 2,
      quantity: 3
    }
  ],
  mobileCartOpen: false
}

function addToCart(id, cartItems) {
  const inCartItem = cartItems.filter(item => id === item.id)

  if (inCartItem.length)
    return incrementItem(id, cartItems)
  else
    return {
      cartItems: [...cartItems, { id, quantity: 1 }]
    }
}

function removeFromCart(id, cartItems) {
  return {
    cartItems: cartItems.filter(item => id !== item.id)
  }
}

function incrementItem(id, cartItems) {
  const inCartItem = cartItems.filter(item => id === item.id);

  if (inCartItem.length)
    return {
      cartItems: [
        ...cartItems.filter(item => id !== item.id),
        { id, quantity: inCartItem[0].quantity + 1 }
      ]
    }
  else
    return addToCart(id, cartItems)
}

function decrementItem(id, cartItems) {
  const inCartItem = cartItems.filter(item => id === item.id);

  if (inCartItem.length)
    return {
      cartItems: [
        ...cartItems.filter(item => id !== item.id),
        { id, quantity: inCartItem[0].quantity - 1 }
      ]
    }
  else
    return removeFromCart(id, cartItems)
}

function setQty(newQty, id, cartItems){
  const notInCartItems = cartItems.filter(item => id !== item.id)

  return {
    cartItems: [...notInCartItems, { id, quantity: newQty }]
  }
}

const useCartStore = create(set => ({
  ...INITIAL_STATE,
  addToCart: (id) => set(state => addToCart(id, state.cartItems)),
  removeFromCart: (id) => set(state => removeFromCart(id, state.cartItems)),
  incrementItem: (id) => set(state => incrementItem(id, state.cartItems)),
  decrementItem: (id) => set(state => decrementItem(id, state.cartItems)),
  setQty: (newQty, id) => set(state => setQty(newQty,id,state.cartItems)),
  toggleMobileCart: () => set(state => ({mobileCartOpen: !state.mobileCartOpen}))
}))

export default useCartStore;