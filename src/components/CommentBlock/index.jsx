import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/slices/postsSlice";
import iconSend from "../../icons/send.png";
import * as SC from "./styles";

export const CommentBlock = ({ post }) => {
  const { user } = useSelector((state) => state.currentUser);
  const [comment, setComment] = useState("");
  const maxLength = 200;
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    e.target.style.height = "initial";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxLength) {
      setComment(inputText);
    }
  };

  const sendComment = (comment) => {
    if (!comment) {
      alert("Пустое поле! Введите текст");
      return;
    }
    dispatch(addComment({ user, post, comment }));
    setComment("");
  };

  return (
    <SC.CommentBlock>
      <div>
        <SC.Comment
          placeholder="Оставить комментарий..."
          onKeyDown={handleKeyDown}
          rows={2}
          value={comment}
          onChange={handleChange}
        />
      </div>

      <SC.Button onClick={() => sendComment(comment)}>
        <img src={iconSend} alt="icon" />
        <p>
          {maxLength - comment.length}/{maxLength}
        </p>
      </SC.Button>
    </SC.CommentBlock>
  );
};
