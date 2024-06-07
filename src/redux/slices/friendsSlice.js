import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: null,
};

export const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    addToFriend: (state, action) => {
      const request = { ...action.payload };
      if (!state.friends) {
        state.friends = [
          { user: request.user, listOfFriends: [request.person] },
        ];
        return;
      }

      const currentUserInList = state.friends.some(
        (friend) => friend.user.id === request.user.id
      );

      if (currentUserInList) {
        const updatedList = state.friends.map((friend) => {
          if (friend.user.id === request.user.id) {
            return {
              ...friend,
              listOfFriends: [request.person, ...friend.listOfFriends],
            };
          }
          return friend;
        });
        state.friends = updatedList;
        return;
      }
      state.friends = [
        { user: request.user, listOfFriends: [request.person] },
        ...state.friends,
      ];
    },

    deleteFromFriends: (state, action) => {
      const request = { ...action.payload };

      const currentUserInList = state.friends.some(
        (friend) => friend.user.id === request.user.id
      );

      if (currentUserInList) {
        const updatedList = state.friends.map((friend) => {
          if (friend.user.id === request.user.id) {
            return {
              ...friend,
              listOfFriends: friend.listOfFriends.filter(
                (friend) => friend.id !== request.person.id
              ),
            };
          }
          return friend;
        });
        state.friends = updatedList;
        return;
      }
    },
  },
});

export const { addToFriend, deleteFromFriends } = friendsSlice.actions;

export default friendsSlice.reducer;
