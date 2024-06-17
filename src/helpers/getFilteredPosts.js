import { filterFriends, filterPosts } from "./filter";

export const getFilteredPosts = (user, friends, privatePosts, publicPosts) => {
  const myFriends = filterFriends(user, friends);
  const myPrivatePosts = filterPosts(user, privatePosts);
  let postsForMain = publicPosts
    ? publicPosts.concat(myPrivatePosts)
    : myPrivatePosts;

  if (myFriends) {
    myFriends.listOfFriends?.forEach((friend) => {
      const friendsPosts = filterPosts(friend, privatePosts);
      return (postsForMain = postsForMain.concat(friendsPosts));
    });
  }
  return postsForMain.sort((a, b) => (b["date"] > a["date"] ? 1 : -1));
};
