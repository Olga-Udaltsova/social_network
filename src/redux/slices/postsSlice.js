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
    addToPrivate: (state, action) => {
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
    addToPublic: (state, action) => {
      const newPost = { ...action.payload };
      newPost.id = new Date().getTime();
      state.publicPosts = state.publicPosts
        ? [newPost, ...state.publicPosts]
        : [newPost];
    },
    editPrivate: (state, action) => {
      state.privatePosts.posts = state.privatePosts.posts.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload;
        }
        return post;
      });
    },
    editPublic: (state, action) => {
      state.publicPosts = state.publicPosts.map((post) => {
        if (post.id === action.payload.id) {
          return {...post, post: action.payload.post}
          /* return ([post = action.payload.post, ...post]); */
        }

        return post;
      });
    },
  },
});

export const { addToPrivate, addToPublic, editPrivate, editPublic } =
  postsSlice.actions;

export default postsSlice.reducer;
