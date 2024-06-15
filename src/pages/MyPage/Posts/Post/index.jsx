import { useState } from "react";
import { Edit } from "../Edit";
import iconEdit from "../../../../icons/edit.svg";
import * as SC from "./styles";
import { DeletePost } from "../../../../components/DeletePost";
import { ImageButton } from "../../../../components/ui/ImageButton";
import { ReadMore } from "../../../../components/ReadMore";

export const Post = ({ myPost }) => {
  const { id, post } = myPost;
  const [postData, setPostData] = useState({});
  const [edit, setEdit] = useState(false);

  const editPost = (values) => {
    setPostData(values);
    setEdit(true);
    return;
  };
  return (
    <>
      <SC.Post key={id}>
        <div>
          <ImageButton func={() => editPost({ id, post })} icon={iconEdit} />
          <DeletePost post={{ id, post }} />
        </div>
        <ReadMore id={id}>{post}</ReadMore>
      </SC.Post>
      {edit && <Edit values={postData} setEdit={setEdit} />}
    </>
  );
};
