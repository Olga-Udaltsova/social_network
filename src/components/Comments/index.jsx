import * as SC from "./styles";

export const Comments = ({ comments }) => (
  <div>
    {comments.map((item) => (
      <SC.Comment key={item.id}>
        <p>
          {item.user.name}: <span>{item.comment}</span>
        </p>
      </SC.Comment>
    ))}
  </div>
);
