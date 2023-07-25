import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalPrice: 0,
    changed:  false,
    isCartOpen: false,
  },

  reducers: {
    addToCart(state, actions) {
      state.changed = true;

      let existingItem = state.cartItems.find(items => items.id === actions.payload.id);

      let updatedTotal = state.totalPrice + actions.payload.totalCost * actions.payload.quantity;

      state.totalPrice = updatedTotal;

      if (!existingItem) {
        state.cartItems.push(actions.payload);
      } else {
        existingItem.quantity = existingItem.quantity + actions.payload.quantity;
      };
    },

    reduceQuantity (state, actions) {
      state.changed = true;
      let existingItem = state.cartItems.find(items => items.id === actions.payload.id);

      let updatedTotal = state.totalPrice - actions.payload.totalCost;

      state.totalPrice = updatedTotal;

      if(existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(item => item.id !== actions.payload.id);
      } else {
        existingItem.quantity--;
      } 
    },

    removeItem (state, actions) {
      state.changed = true;

      let amountToSubstract = actions.payload.totalCost * actions.payload.quantity;
      state.cartItems = state.cartItems.filter(item => item.id !== actions.payload.id);
      state.totalPrice = state.totalPrice - amountToSubstract; 
    },
    openCartHandler(state) {
      state.isCartOpen = true;
    },
    closeCartHandler(state) {
      state.isCartOpen = false;
    },
    replaceItems(state, action) {
      state.cartItems = action.payload.items;
    }
  }
});


export default cartSlice;
export const cartActions = cartSlice.actions;