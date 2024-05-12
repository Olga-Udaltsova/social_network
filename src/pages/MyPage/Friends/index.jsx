import { Avatar } from "../../../components/ui/Avatar";
import * as SC from "./styles";

export const Friends = ({ friend }) => {
  const { id, name } = friend;
  return (
    <SC.Friend key={id}>
      <Avatar $value="100px" $radius="50px" />
      <p>{name}</p>
    </SC.Friend>
  );
};
