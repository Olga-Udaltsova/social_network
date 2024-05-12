import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  privatePosts: {
    author: null,
    posts: null,
  },
  publicPosts: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    toAddPrivate: (state, action) => {
      const newPost = { ...action.payload };
      state.privatePosts.author = newPost.user;
      state.privatePosts.posts = state.privatePosts.posts
        ? [newPost.post, ...state.privatePosts.posts]
        : [newPost.post];
    },
    toAddPublic: (state, action) => {
      const newPost = { ...action.payload };
      newPost.id = new Date().getTime();
      state.publicPosts = state.publicPosts
        ? [newPost, ...state.publicPosts]
        : [newPost];
    },
  },
});

export const { toAddPrivate, toAddPublic } = postsSlice.actions;

export default postsSlice.reducer;
