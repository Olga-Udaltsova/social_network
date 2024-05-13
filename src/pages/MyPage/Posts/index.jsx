import { useState } from "react";
import { Button } from "../../../components/ui/Button";
import { Edit } from "./Edit";
import * as SC from "./styles";

export const Posts = ({ myPost }) => {
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
        <p>{post}</p>
        <Button onClick={() => editPost({ id, post })}>
          Редактировать пост
        </Button>
      </SC.Post>
      {edit && <Edit values={postData} setEdit={setEdit} />}
    </>
  );
};
