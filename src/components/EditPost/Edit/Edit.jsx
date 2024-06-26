import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Modal } from "../../ui/Modal/Modal";
import { Button } from "../../ui/Button/Button";
import { ImageButton } from "../../ui/ImageButton/ImageButton";
import { editPost } from "../../../redux/slices/postsSlice";
import close from "../../../icons/close.svg";
import * as SC from "./styles";

export const Edit = ({ values, setEdit }) => {
  const [modifiedPost, setModifiedPost] = useState(values);
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
    dispatch(editPost(modifiedPost));
    toast.success("Пост отредактирован");
    setEdit(false);
  };

  return (
    <Modal>
      <SC.Form>
        <ImageButton
          style={{ marginLeft: " 400px" }}
          func={() => setEdit(false)}
          icon={close}
        />
        <label htmlFor="textPost">Редактирование</label>
        <textarea
          id="textPost"
          type="text"
          placeholder="Текст"
          value={modifiedPost.post}
          onChange={(e) => onChange(e.target.value)}
          cols={42}
          rows={8}
        />
        <Button onClick={() => saveChanges(modifiedPost)}>Сохранить</Button>
      </SC.Form>
    </Modal>
  );
};
