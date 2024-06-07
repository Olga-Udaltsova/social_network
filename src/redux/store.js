import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import friendsReducer from "./slices/friendsSlice";
import postsReducer from "./slices/postsSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const persistConfigUser = {
  key: "user",
  storage,
};

const persistConfigFriends = {
  key: "friends",
  storage,
};

const persistConfigPosts = {
  key: "posts",
  storage,
};

export const store = configureStore({
  reducer: {
    currentUser: persistReducer(persistConfigUser, userReducer),
    friends: persistReducer(persistConfigFriends, friendsReducer),
    posts: persistReducer(persistConfigPosts, postsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
