import { useState } from "react";
import { ImageButton } from "../ui/ImageButton/ImageButton";
import { Edit } from "./Edit/Edit";
import iconEdit from "../../icons/edit.svg";

export const EditPost = ({ post }) => {
  const [postData, setPostData] = useState({});
  const [edit, setEdit] = useState(false);

  const editPost = (values) => {
    setPostData(values);
    setEdit(true);
    return;
  };
  return (
    <>
      <ImageButton func={() => editPost(post)} icon={iconEdit} />
      {edit && <Edit values={postData} setEdit={setEdit} />}
    </>
  );
};
