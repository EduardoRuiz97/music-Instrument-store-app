import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice/cart-slice";
import SignIn from "./signIn-slice/sing-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    sign: SignIn.reducer,
  },
});


export default store;