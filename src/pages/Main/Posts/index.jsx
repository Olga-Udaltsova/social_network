import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../../redux/slices/postsSlice";
import iconSend from "../../../icons/send.png";
import iconDelete from "../../../icons/delete.svg";
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
          <SC.Button onClick={() => dispatch(deletePost(publication))}>
            <img src={iconDelete} />
          </SC.Button>
        ) : (
          <SC.CommentBlock>
            <div>
              <SC.Comment
                placeholder="Оставить комментарий..."
                onKeyDown={handleKeyDown}
                rows={2}
              />
            </div>
            <SC.Button>
              <img src={iconSend} />
            </SC.Button>
          </SC.CommentBlock>
        )}
      </div>
    </SC.Publication>
  );
};
