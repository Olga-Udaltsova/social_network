export const getAllPosts = (privatePosts, publicPosts) => {
  let allPosts = [];
  if (privatePosts) {
    allPosts = allPosts.concat(privatePosts);
  }
  if (publicPosts) {
    allPosts = allPosts.concat(publicPosts);
  }

  return allPosts.sort((a, b) => (b["date"] > a["date"] ? 1 : -1));
};
