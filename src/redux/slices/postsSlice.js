import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  privatePosts: null,
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

      if (!state.privatePosts) {
        state.privatePosts = [{ user: publication.user, list: [newPost] }];
        return;
      }
      const currentUser = state.privatePosts.some(
        (item) => current(item.user) === publication.user
      );

      if (currentUser) {
        const updatedList = state.privatePosts.map((item) => {
          if (current(item.user) === publication.user) {
            return {
              ...item,
              list: [newPost, ...item.list],
            };
          }
          return item;
        });
        state.privatePosts = updatedList;
        return;
      }
      state.privatePosts = [
        { user: publication.user, lis: [newPost] },
        ...state.privatePosts,
      ];

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
