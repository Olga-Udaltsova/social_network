import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    user: null,
    friends: null,
  },
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser.user = action.payload;
    },
    logout: (state) => {
      state.currentUser.user = null;
      state.currentUser.friends = null;
    },
    addToFriend: (state, action) => {
      const newFriend = { ...action.payload };
      state.currentUser.friends = state.currentUser.friends
        ? [newFriend, ...state.currentUser.friends]
        : [newFriend];
    },
    deleteFromFriends: (state, action) => {
      state.currentUser.friends = state.currentUser.friends.filter(
        (friend) => friend.id !== action.payload.id
      );
    },
  },
});

export const { login, logout, addToFriend, deleteFromFriends } =
  userSlice.actions;

export default userSlice.reducer;
