import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  privatePosts: null,
  publicPosts: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addToPrivate: (state, action) => {
      const newPost = { ...action.payload };
      newPost.id = new Date().getTime();
      state.privatePosts = state.privatePosts
        ? [newPost, ...state.privatePosts]
        : [newPost];
    },
    addToPublic: (state, action) => {
      const newPost = { ...action.payload };
      newPost.id = new Date().getTime();
      state.publicPosts = state.publicPosts
        ? [newPost, ...state.publicPosts]
        : [newPost];
    },
    editPrivate: (state, action) => {
      state.privatePosts = state.privatePosts.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, post: action.payload.post };
        }
        return post;
      });
    },
    editPublic: (state, action) => {
      state.publicPosts = state.publicPosts.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, post: action.payload.post };
        }
        return post;
      });
    },
  },
});

export const { addToPrivate, addToPublic, editPrivate, editPublic } =
  postsSlice.actions;

export default postsSlice.reducer;
