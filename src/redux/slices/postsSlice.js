import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  privatePosts: null,
  publicPosts: null,
  allPosts: null,
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
      state.allPosts = state.allPosts
        ? state.allPosts.concat(newPost)
        : [newPost];
    },
    addToPublic: (state, action) => {
      const newPost = { ...action.payload };
      newPost.id = new Date().getTime();
      state.publicPosts = state.publicPosts
        ? [newPost, ...state.publicPosts]
        : [newPost];
      state.allPosts = state.allPosts
        ? state.allPosts.concat(newPost)
        : [newPost];
    },
    editPost: (state, action) => {
      state.privatePosts = state.privatePosts.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, post: action.payload.post };
        }
        return post;
      });

      state.publicPosts = state.publicPosts.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, post: action.payload.post };
        }
        return post;
      });

      state.allPosts = state.allPosts.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, post: action.payload.post };
        }
        return post;
      });
    },
    deletePost: (state, action) => {
      state.privatePosts = state.privatePosts.filter(
        (post) => post.id !== action.payload.id
      );
      state.publicPosts = state.publicPosts.filter(
        (post) => post.id !== action.payload.id
      );
      state.allPosts = state.allPosts.filter(
        (post) => post.id !== action.payload.id
      );
    },
  },
});

export const { addToPrivate, addToPublic, editPost, deletePost } =
  postsSlice.actions;

export default postsSlice.reducer;
