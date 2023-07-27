import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalCost: 0,
    cartChanged: false,
    isCartOpen: false,
  },
  reducers: {
    addItemToCart(state, actions) {
      state.cartChanged = true;

      let existingItem = state.items.find(items => items.id === actions.payload.id);

      let updatedTotal = state.totalCost + actions.payload.totalCost * actions.payload.quantity;

      state.totalCost = updatedTotal;

      if (!existingItem) {
        state.items.push(actions.payload);
      } else {
        existingItem.quantity = existingItem.quantity + actions.payload.quantity;
      };
    },
    removeItemFromCart(state, actions) {
      state.cartChanged = true;

      let amountToSubstract = actions.payload.totalCost * actions.payload.quantity;
      state.items = state.items.filter(item => item.id !== actions.payload.id);
      state.totalCost = state.totalCost - amountToSubstract; 
    },
    reduceQuantity(state, actions) {

      state.changed = true;
      
      let updatedTotal = state.totalCost - actions.payload.totalCost;

      state.totalPrice = updatedTotal;

      let existingItem = state.items.find(items => items.id === actions.payload.id);

      if(existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== actions.payload.id);
      } else {
        existingItem.quantity--;
      } 
    },
    updateCart(state, actions) {
      
    },
    openCartHandler(state) {
      state.isCartOpen = true;
    },
    closeCartHandler(state) {
      state.isCartOpen = false;
    },
  }
});

export default cartSlice;
export const cartSliceActions = cartSlice.actions;