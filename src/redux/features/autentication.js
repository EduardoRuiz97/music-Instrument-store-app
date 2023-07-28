import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageState = () => {
  if (typeof window !== 'undefined') {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    return storedIsLoggedIn === "true";
  }
  return false; // Default value if localStorage is not available
};


const loggedIn = createSlice({
  name: 'logged',
  initialState : {
    isLoggedIn: getLocalStorageState()
  },
  reducers: {
    signUp(state) {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", state.isLoggedIn)
    },
    logOut(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn");
    }
  }
});

export default loggedIn;
export const loggedInActions = loggedIn.actions;