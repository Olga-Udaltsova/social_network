import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { ImageButton } from "../ui/ImageButton";
import { deletePost } from "../../redux/slices/postsSlice";
import iconDelete from "../../icons/delete.svg";
import * as SC from "./styles";

export const DeletePost = ({ post}) => {
  const [clickDelete, setClickDelete] = useState(false);
  const dispatch = useDispatch();

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
            <Button onClick={() => dispatch(deletePost(post))}>Удалить</Button>
            <Button onClick={() => setClickDelete(!clickDelete)}>Отмена</Button>
          </SC.Buttons>
        </Modal>
      )}
    </>
  );
};
