import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  friends: null,
};

export const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    addToFriend: (state, action) => {
      const request = { ...action.payload };
      request.id = new Date().getTime();
      const newFriend = {
        id: request.id,
        friend: request.person,
      };

      if (!state.friends) {
        state.friends = [{ user: request.user, listOfFriends: [newFriend] }];
        return;
      }

      const currentUserInList = state.friends.some(
        (friend) => current(friend.user) === request.user
      );

      if (currentUserInList) {
        const updatedList = state.friends.map((friend) => {
          if (current(friend.user) === request.user) {
            return {
              ...friend,
              listOfFriends: [newFriend, ...friend.listOfFriends],
            };
          }
          return friend;
        });
        state.friends = updatedList;
        return;
      }
      state.friends = [
        { user: request.user, listOfFriends: [newFriend] },
        ...state.friends,
      ];
    },

    deleteFromFriends: (state, action) => {
      const request = { ...action.payload };

      const currentUserInList = state.friends.some(
        (friend) => current(friend.user) === request.user
      );

      if (currentUserInList) {
        const updatedList = state.friends.map((friend) => {
          if (current(friend.user) === request.user) {
            return {
              ...friend,
              listOfFriends: current(friend.listOfFriends).filter(
                (friend) => friend.friend.id !== request.person.id
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
