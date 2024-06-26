import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Modal } from "../ui/Modal/Modal";
import { Button } from "../ui/Button/Button";
import { ImageButton } from "../ui/ImageButton/ImageButton";
import { deletePost } from "../../redux/slices/postsSlice";
import iconDelete from "../../icons/delete.svg";
import * as SC from "./styles";

export const DeletePost = ({ post }) => {
  const [clickDelete, setClickDelete] = useState(false);
  const dispatch = useDispatch();

  const removePost = (post) => {
    dispatch(deletePost(post));
    toast.error("Пост удален");
  };

  return (
    <>
      <ImageButton
        func={() => setClickDelete(!clickDelete)}
        icon={iconDelete}
      />
      {clickDelete && (
        <Modal>
          <p>Вы действительно хотите удалить этот пост?</p>
          <SC.Buttons>
            <Button onClick={() => removePost(post)}>Удалить</Button>
            <Button onClick={() => setClickDelete(!clickDelete)}>Отмена</Button>
          </SC.Buttons>
        </Modal>
      )}
    </>
  );
};
