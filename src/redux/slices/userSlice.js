import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  lastUser: null,
  admin: null,
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
      state.lastUser = action.payload;
      state.admin = null;
    },
    loginAsAdmin: (state, action) => {
      state.admin = action.payload;
    },
  },
});

export const { login, logout, loginAsAdmin } = userSlice.actions;

export default userSlice.reducer;
