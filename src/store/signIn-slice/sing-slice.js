import { createSlice } from "@reduxjs/toolkit";


const SignIn  = createSlice({
  name: 'sign',
  initialState: {
    isSignIn: false,
    ussers: [],
  },
  reducers: {
    signUp(state) {
      state.isSignIn = true;
      localStorage.setItem('isSignIn', state.isSignIn);
    },
    logOut(state) {
      state.isSignIn = false;
      localStorage.removeItem('isSignIn');
    },
    SignIn(state) {
      state.isSignIn = true;
      localStorage.setItem('isSignIn', state.isSignIn);
    }
  }
});


export default SignIn;
export const signInActions = SignIn.actions;