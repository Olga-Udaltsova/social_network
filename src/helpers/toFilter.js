export const toFilterFriends = (user, list) => {
  const value = list?.find((item) => {
    if (item.user.id === user.id) {
      return item;
    }
  });
  return value;
};

export const toFilterPosts = (user, list) => {
  const value = list?.filter((item) => {
    if (item.user.email === user.email) {
      return item;
    }
  });
  return value;
};
