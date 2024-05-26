import { useState } from "react";
import iconSend from "../../../../icons/send.png";
import * as SC from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../../redux/slices/postsSlice";

export const CommentBlock = ({ post }) => {
  const { user } = useSelector((state) => state.currentUser);
  const [comment, setComment] = useState("");
  const handleKeyDown = (e) => {
    e.target.style.height = "initial";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const dispatch = useDispatch();

  return (
    <SC.CommentBlock>
      <div>
        <SC.Comment
          placeholder="Оставить комментарий..."
          onKeyDown={handleKeyDown}
          rows={2}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <SC.Button onClick={() => dispatch(addComment({ user, post, comment }))}>
        <img src={iconSend} />
      </SC.Button>
    </SC.CommentBlock>
  );
};
