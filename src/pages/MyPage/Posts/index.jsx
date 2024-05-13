import { Button } from "../../../components/ui/Button";
import * as SC from "./styles";

export const Posts = ({ myPost }) => {
  const { id, post } = myPost;

  return (
    <SC.Post key={id}>
      <p>{post}</p>
      <Button>Редактировать пост</Button>
    </SC.Post>
  );
};
