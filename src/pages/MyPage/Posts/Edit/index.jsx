import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../../../components/ui/Modal";
import { Button } from "../../../../components/ui/Button";
import { editPrivate, editPublic } from "../../../../redux/slices/postsSlice";
import * as SC from "./styles";

export const Edit = ({ values, setEdit }) => {
  const [modifiedPost, setModifiedPost] = useState(values);
  const { posts } = useSelector((state) => state.posts.privatePosts);
  const privatePosts = posts?.find((item) => item.id === values.id);
  const dispatch = useDispatch();

  const onChange = (value) => {
    setModifiedPost({ ...modifiedPost, post: value });
  };

  const saveChanges = (modifiedPost) => {
    if (!modifiedPost.post) {
      alert("Введите, пожалуйста, текст!");
      setEdit(true);
      return;
    }
    if (privatePosts) {
      dispatch(editPrivate(modifiedPost));
      setEdit(false);
      return;
    }
    dispatch(editPublic(modifiedPost));
    setEdit(false);
  };

  return (
    <Modal>
      <SC.Form>
        <SC.Label htmlFor="textPost">Текст поста</SC.Label>
        <SC.Input
          id="textPost"
          type="text"
          placeholder="Текст"
          value={modifiedPost.post}
          onChange={(e) => onChange(e.target.value)}
          cols={45}
          rows={5}
        />
      </SC.Form>
      <Button onClick={() => saveChanges(modifiedPost)}>Сохранить</Button>
    </Modal>
  );
};
