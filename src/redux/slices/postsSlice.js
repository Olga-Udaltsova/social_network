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
      const publication = { ...action.payload };
      publication.id = new Date().getTime();
      const newPost = {
        id: publication.id,
        post: publication.post,
      };
      state.privatePosts.author = publication.user;
      state.privatePosts.posts = state.privatePosts.posts
        ? [newPost, ...state.privatePosts.posts]
        : [newPost];
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
