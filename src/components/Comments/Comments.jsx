import { Date } from "../ui/Date/Date";
import * as SC from "./styles";

export const Comments = ({ comments }) => (
  <div>
    {comments.map((item) => (
      <SC.Comment key={item.id}>
        <p>
          {item.user.name}: <span>{item.comment}</span>
        </p>
        <Date>{item.date}</Date>
      </SC.Comment>
    ))}
  </div>
);
