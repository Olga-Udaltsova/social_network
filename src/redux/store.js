import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import friendsReducer from "./slices/friendsSlice";
import postsReducer from "./slices/postsSlice";

export const store = configureStore({
  reducer: {
    currentUser: userReducer,
    friends: friendsReducer,
    posts: postsReducer,
  },
});
