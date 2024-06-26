import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

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
      newPost.id = uuidv4();
      newPost.date = new Date().toLocaleString();
      state.privatePosts = state.privatePosts
        ? [...state.privatePosts, newPost]
        : [newPost];
    },
    addToPublic: (state, action) => {
      const newPost = { ...action.payload };
      newPost.id = uuidv4();
      newPost.date = new Date().toLocaleString();
      state.publicPosts = state.publicPosts
        ? [...state.publicPosts, newPost]
        : [newPost];
    },
    editPost: (state, action) => {
      if (state.privatePosts) {
        state.privatePosts = state.privatePosts.map((post) => {
          if (post.id === action.payload.id) {
            return { ...post, post: action.payload.post };
          }
          return post;
        });
      }
      state.publicPosts = state.publicPosts.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, post: action.payload.post };
        }
        return post;
      });
    },
    deletePost: (state, action) => {
      if (state.privatePosts) {
        state.privatePosts = state.privatePosts.filter(
          (post) => post.id !== action.payload.id
        );
      }
      state.publicPosts = state.publicPosts.filter(
        (post) => post.id !== action.payload.id
      );
    },

    addComment: (state, action) => {
      const comment = { ...action.payload };
      const newComment = {
        id: uuidv4(),
        date: new Date().toLocaleString(),
        user: comment.user,
        comment: comment.comment,
      };

      if (state.privatePosts) {
        state.privatePosts = state.privatePosts.map((post) => {
          if (post.id === comment.post.id) {
            return {
              ...post,
              comments: post.comments
                ? [...post.comments, newComment]
                : [newComment],
            };
          }
          return post;
        });
      }
      state.publicPosts = state.publicPosts.map((post) => {
        if (post.id === comment.post.id) {
          return {
            ...post,
            comments: post.comments
              ? [...post.comments, newComment]
              : [newComment],
          };
        }
        return post;
      });
    },
  },
});

export const { addToPrivate, addToPublic, editPost, deletePost, addComment } =
  postsSlice.actions;

export default postsSlice.reducer;
