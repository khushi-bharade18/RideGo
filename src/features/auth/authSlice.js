import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("ridego-user");

const initialState = storedUser
  ? JSON.parse(storedUser)
  : {
      email: "",
      username: "",
      isAuthenticated: false,
    };

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    // ONLY update input fields
    updateFormData: (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
    },

    // ONLY login on submit
    loginUser: (state) => {
      state.isAuthenticated = true;

      localStorage.setItem(
        "ridego-user",
        JSON.stringify(state)
      );
    },

    logoutUser: (state) => {
      state.email = "";
      state.username = "";
      state.isAuthenticated = false;

      localStorage.removeItem("ridego-user");
    },
  },
});

export const {
  updateFormData,
  loginUser,
  logoutUser,
} = authSlice.actions;

export default authSlice.reducer;