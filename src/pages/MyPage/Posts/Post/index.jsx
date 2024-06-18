import { EditPost } from "../../../../components/EditPost";
import { DeletePost } from "../../../../components/DeletePost";
import { ReadMore } from "../../../../components/ReadMore";
import { Date } from "../../../../components/ui/Date";
import * as SC from "./styles";

export const Post = ({ myPost }) => {
  const { id, post, date } = myPost;
  return (
    <SC.Post key={id}>
      <div>
        <EditPost post={myPost} />
        <DeletePost post={myPost} />
      </div>
      <ReadMore id={id}>{post}</ReadMore>
      <Date>{date}</Date>
    </SC.Post>
  );
};
