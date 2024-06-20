import { useSelector } from "react-redux";
import { EditPost } from "../../EditPost";
import { DeletePost } from "../../DeletePost";
import { ReadMore } from "../../ReadMore";
import { Date } from "../../ui/Date";
import * as SC from "./styles";

export const Post = ({ myPost, currentUser }) => {
  const { id, post, date } = myPost;
  const { user } = useSelector((state) => state.currentUser);

  return (
    <SC.Post key={id}>
      {currentUser.id === user.id && (
        <div>
          <EditPost post={myPost} />
          <DeletePost post={myPost} />
        </div>
      )}
      <ReadMore id={id}>{post}</ReadMore>
      <Date>{date}</Date>
    </SC.Post>
  );
};
