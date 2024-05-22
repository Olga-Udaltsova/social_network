import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../../../../components/ui/Modal";
import { Button } from "../../../../components/ui/Button";
import { editPost } from "../../../../redux/slices/postsSlice";
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
        <Button className="close" onClick={() => setEdit(false)}>
          Закрыть
        </Button>
        <SC.Label htmlFor="textPost">Редактирование</SC.Label>
        <SC.Input
          id="textPost"
          type="text"
          placeholder="Текст"
          value={modifiedPost.post}
          onChange={(e) => onChange(e.target.value)}
          cols={42}
          rows={8}
        />
      </SC.Form>
      <Button onClick={() => saveChanges(modifiedPost)}>Сохранить</Button>
    </Modal>
  );
};
