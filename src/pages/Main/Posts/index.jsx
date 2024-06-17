import { useSelector } from "react-redux";
import { Avatar } from "../../../components/ui/Avatar";
import { DeletePost } from "../../../components/DeletePost";
import { CommentBlock } from "../../../components/CommentBlock";
import { Comments } from "../../../components/Comments";
import { ReadMore } from "../../../components/ReadMore";
import { Date } from "../../../components/ui/Date";
import isPrivate from "../../../icons/isPrivate.png";
import * as SC from "./styles";

export const Posts = ({ publication }) => {
  const { id, date, user, post, comments } = publication;
  const { admin } = useSelector((state) => state.currentUser);
  const { privatePosts } = useSelector((state) => state.posts);

  return (
    <SC.Posts key={id}>
      <SC.Publication>
        <SC.Information>
          <div>
            <Avatar $value="50px" $radius="25px" />
            <SC.Data>
              <p>{user.name}</p>
              <Date>{date}</Date>
            </SC.Data>
            {privatePosts?.includes(publication) && (
              <SC.Private>
                <img src={isPrivate} alt="privatePost" />
              </SC.Private>
            )}
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
