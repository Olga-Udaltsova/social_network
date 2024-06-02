export const getAllPosts = (privatePosts, publicPosts) => {
  let allPosts = [];
  if (publicPosts) {
    if (privatePosts) {
      allPosts = allPosts.concat(privatePosts);
    }
    return (allPosts = allPosts.concat(publicPosts));
  }
  return allPosts;
};
