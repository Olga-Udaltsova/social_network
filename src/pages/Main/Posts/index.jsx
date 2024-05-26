import { useSelector } from "react-redux";
import { DeletePost } from "./DeletePost";
import { CommentBlock } from "./CommentBlock";
import { Comments } from "./Comments";

import * as SC from "./styles";

export const Posts = ({ publication }) => {
  const { id, user, post, comments } = publication;
  const { admin } = useSelector((state) => state.currentUser);

  return (
    <SC.Publication key={id}>
      <SC.Information>
        <p>Пост опубликован пользователем: {user.name}</p>
        <p>{post}</p>
      </SC.Information>
      <Comments comments={comments} />
      {admin ? (
        <DeletePost post={publication} />
      ) : (
        <CommentBlock post={publication} />
      )}
    </SC.Publication>
  );
};
