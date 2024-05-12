export const Posts = ({ publicPost }) => {
  const { id, user, post } = publicPost;
  return (
    <div key={id}>
      <p>{user.name}</p>
      <p>{post}</p>
    </div>
  );
};
