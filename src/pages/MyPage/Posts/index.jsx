import { Button } from "../../../components/ui/Button";
import * as SC from "./styles";

export const Posts = ({ post }) => (
  <SC.Post>
    <p>{post}</p>
    <Button>Редактировать пост</Button>
  </SC.Post>
);
