import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../../../../components/ui/Modal";
import { Button } from "../../../../components/ui/Button";
import { deletePost } from "../../../../redux/slices/postsSlice";
import iconDelete from "../../../../icons/delete.svg";
import * as SC from "./styles";

export const DeletePost = ({ post }) => {
  const [clickDelete, setClickDelete] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <SC.Button onClick={() => setClickDelete(!clickDelete)}>
        <img src={iconDelete} alt="icon" />
        <p>Удалить</p>
      </SC.Button>
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
