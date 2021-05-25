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

/**
 * Adds an item to the cart, or increments if item is already in the cart.
 * @param {int} id the id of the product
 * @param {array} cartItems snapshot of the current cart
 * @returns Object
 */
function addToCart(id, cartItems) {
  const inCartItem = cartItems.filter(item => id === item.id)

  if (inCartItem.length)
    return incrementItem(id, cartItems)
  else
    return {
      cartItems: [...cartItems, { id, quantity: 1 }]
    }
}

/**
 * Remove an item from the cart. Does nothing if item is not present.
 * @param {int} id the id of the product
 * @param {array} cartItems snapshot of the current cart
 * @returns Object
 */
function removeFromCart(id, cartItems) {
  return {
    cartItems: cartItems.filter(item => id !== item.id)
  }
}

/**
 * Increment the quantity by 1, or adds the item to the cart if not present.
 * @param {int} id the id of the product
 * @param {array} cartItems snapshot of the current cart
 * @returns Object
 */
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

/**
 * Decrements the quantity by 1, or removes the item if quantity is 0.
 * @param {int} id the id of the product
 * @param {array} cartItems snapshot of the current cart
 * @returns Object
 */
function decrementItem(id, cartItems) {
  const inCartItem = cartItems.filter(item => id === item.id);

  if (inCartItem.length) {
    if (inCartItem[0].quantity - 1 > 0)
      return ({
        cartItems: [
          ...cartItems.filter(item => id !== item.id),
          { id, quantity: inCartItem[0].quantity - 1 }
        ]
      })
    else
      return ({ cartItems: cartItems.filter(item => id !== item.id) })
  }
}

/**
 * Sets the quantity of item in cart. Adds the item if not preset, or removes the item if quantity is 0.
 * @param {int} id the id of the product
 * @param {array} cartItems snapshot of the current cart
 * @returns Object
 */
function setQty(newQty, id, cartItems) {
  const notInCartItems = cartItems.filter(item => id !== item.id)
  const inCartItem = cartItems.filter(item => id === item.id);

  if (inCartItem.length && newQty > 0) {
      return ({ cartItems: [...notInCartItems, { id, quantity: newQty }] })
  } else {
    return ({ cartItems: notInCartItems })
  }
}

const useCartStore = create(set => ({
  ...INITIAL_STATE,
  addToCart: (id) => set(state => addToCart(id, state.cartItems)),
  removeFromCart: (id) => set(state => removeFromCart(id, state.cartItems)),
  incrementItem: (id) => set(state => incrementItem(id, state.cartItems)),
  decrementItem: (id) => set(state => decrementItem(id, state.cartItems)),
  setQty: (newQty, id) => set(state => setQty(newQty, id, state.cartItems)),
  toggleMobileCart: () => set(state => ({ mobileCartOpen: !state.mobileCartOpen }))
}))

export default useCartStore;