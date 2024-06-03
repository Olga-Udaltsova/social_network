import * as SC from "./styles";

export const Comments = ({ comments }) => (
  <SC.Div>
    {comments ? (
      comments.map((item) => (
        <SC.Comment key={item.id}>
          <p>
            {item.user.name}: <span>{item.comment}</span>
          </p>
        </SC.Comment>
      ))
    ) : (
      <></>
    )}
  </SC.Div>
);
