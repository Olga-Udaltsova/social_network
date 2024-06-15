import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../../../../components/ui/Modal";
import { Button } from "../../../../components/ui/Button";
import { editPost } from "../../../../redux/slices/postsSlice";
import { ImageButton } from "../../../../components/ui/ImageButton";
import close from "../../../../icons/close.svg";
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
    setEdit(false);
  };

  return (
    <Modal>
      <SC.Form>
        <ImageButton
          className="close"
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
