export const filterFriends = (user, list) => {
  const value = list?.find((item) => item.user.id === user.id);
  return value;
};

export const filterPosts = (user, list) => {
  let arr = [];
  if (!list) {
    return arr;
  }
  arr = list.filter((item) => item.user.email === user.email);
  return arr;
};
