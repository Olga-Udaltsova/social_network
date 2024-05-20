export const toFilterFriends = (user, list) => {
  const value = list?.find((item) => {
    if (item.user.id === user.id) {
      return item;
    }
  });
  return value;
};

export const toFilterPosts = (user, list) => {
  let arr = [];
  if (!list) {
    return arr;
  }
  arr = list?.filter((item) => {
    if (item.user.email === user.email) {
      return item;
    }
  });
  return arr;
};
