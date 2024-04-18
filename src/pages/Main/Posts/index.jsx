export const Posts = ({ post }) => {
  const { id, name } = post;
  return (
    <div key={id}>
      <p>{name}</p>
    </div>
  );
};
