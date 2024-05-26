import * as SC from "./styles";

export const Comments = ({ comments }) => {
  return (
    <SC.Div>
      {comments ? (
        comments.map((item) => (
          <SC.Comment key={item.id}>
            <p>{item.user.name}: </p>
            <p>{item.comment}</p>
          </SC.Comment>
        ))
      ) : (
        <></>
      )}
    </SC.Div>
  );
};
