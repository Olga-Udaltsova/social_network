import { useSelector } from "react-redux";
import { Avatar } from "../../../components/ui/Avatar/Avatar";
import { DeletePost } from "../../../components/DeletePost/DeletePost";
import { EditPost } from "../../../components/EditPost/EditPost";
import { CommentBlock } from "../../../components/CommentBlock/CommentBlock";
import { Comments } from "../../../components/Comments/Comments";
import { ReadMore } from "../../../components/ReadMore/ReadMore";
import { Date } from "../../../components/ui/Date/Date";
import isPrivate from "../../../icons/isPrivate.png";
import * as SC from "./styles";

export const Posts = ({ publication }) => {
  const { id, date, post, comments } = publication;
  const { admin, user } = useSelector((state) => state.currentUser);
  const { privatePosts } = useSelector((state) => state.posts);

  return (
    <SC.Posts key={id}>
      <SC.Publication>
        <div>
          <SC.Information>
            <Avatar $value="50px" $radius="25px" />
            <div>
              <p>{publication.user.name}</p>
              <Date>{date}</Date>
            </div>
          </SC.Information>
          {privatePosts?.includes(publication) && (
            <SC.Private>
              <img src={isPrivate} alt="privatePost" />
            </SC.Private>
          )}
        </div>
        {admin && <DeletePost post={publication} />}
        {user && publication.user.id === user.id && (
          <SC.Actions>
            <EditPost post={publication} />
            <DeletePost post={publication} />
          </SC.Actions>
        )}
      </SC.Publication>
      <ReadMore id={id}>{post}</ReadMore>
      {comments && <Comments comments={comments} />}
      {!admin && <CommentBlock post={publication} />}
    </SC.Posts>
  );
};
