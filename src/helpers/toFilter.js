export const toFilter = (user, list) => {
  const value = list?.find((item) => {
    if (item.user.id === user.id) {
      return item;
    }
    return;
  });
  return value;
};
