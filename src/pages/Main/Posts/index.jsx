import { useSelector } from "react-redux";
import { Avatar } from "../../../components/ui/Avatar";
import { DeletePost } from "./DeletePost";
import { CommentBlock } from "./CommentBlock";
import { Comments } from "./Comments";
import * as SC from "./styles";

export const Posts = ({ publication }) => {
  const { id, user, post, comments } = publication;
  const { admin } = useSelector((state) => state.currentUser);

  return (
    <SC.Posts key={id}>
      <SC.Publication>
        <SC.Information>
          <div>
            <Avatar $value="50px" $radius="25px" />
            <p>{user.name}</p>
          </div>
          <p>{post}</p>
        </SC.Information>
        {admin && <DeletePost post={publication} />}
      </SC.Publication>
      {comments && <Comments comments={comments} />}
      {!admin && <CommentBlock post={publication} />}
    </SC.Posts>
  );
};
