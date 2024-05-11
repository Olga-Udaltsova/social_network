import avatar from "../../../images/avatar.jpg";
import * as SC from "./styles";

export const Friends = ({ friend }) => (
  <SC.Friend key={friend.id}>
    <SC.Avatar src={avatar} alt="avatar" />
    <p>{friend.name}</p>
  </SC.Friend>
);
