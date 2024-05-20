import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../../redux/slices/postsSlice";
import { Button } from "../../../components/ui/Button";
import * as SC from "./styles";

export const Posts = ({ publication }) => {
  const { id, user, post } = publication;
  const { admin } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  return (
    <SC.Publication key={id}>
      <SC.Information>
        <p>Пост опубликован пользователем: {user.name}</p>
        <p>{post}</p>
      </SC.Information>
      <div>
        {admin ? (
          <Button
            className="delete"
            onClick={() => dispatch(deletePost(publication))}
          >
            Удалить
          </Button>
        ) : (
          <div>Оставить комментарий</div>
        )}
      </div>
    </SC.Publication>
  );
};
