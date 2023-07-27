import { configureStore } from "@reduxjs/toolkit";
import loggedIn from "./features/autentication";
import cartSlice from "./features/car-slice";

const store = configureStore({
  reducer: {
    logged: loggedIn.reducer,
    cart: cartSlice.reducer,
  }
});

export default store;

