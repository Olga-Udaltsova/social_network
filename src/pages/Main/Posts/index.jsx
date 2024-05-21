import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../../redux/slices/postsSlice";
import { Button } from "../../../components/ui/Button";
import * as SC from "./styles";

export const Posts = ({ publication }) => {
  const { id, user, post } = publication;
  const { admin } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    e.target.style.height = "initial";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

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
          <SC.CommentBlock>
            <SC.Comment
              placeholder="Оставить комментарий..."
              onKeyDown={handleKeyDown}
            />
            <div>
              <Button>Отправить</Button>
            </div>
          </SC.CommentBlock>
        )}
      </div>
    </SC.Publication>
  );
};
