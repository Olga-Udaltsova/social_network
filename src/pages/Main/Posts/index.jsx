import { useSelector } from "react-redux";
import { Avatar } from "../../../components/ui/Avatar";
import { DeletePost } from "../../../components/DeletePost";
import { CommentBlock } from "../../../components/CommentBlock";
import { Comments } from "../../../components/Comments";
import { ReadMore } from "../../../components/ReadMore";
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
          <ReadMore id={id}>{post}</ReadMore>
        </SC.Information>
        {admin && <DeletePost post={publication} />}
      </SC.Publication>
      {comments && <Comments comments={comments} />}
      {!admin && <CommentBlock post={publication} />}
    </SC.Posts>
  );
};
