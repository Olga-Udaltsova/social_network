import { useState } from "react";
import { Button } from "../../../components/ui/Button";
import avatar from "../../../images/avatar.jpg";
import * as SC from "./styles";

export const Users = ({ user }) => {
  const [friend, setFriend] = useState(false);

  return (
    <SC.Div key={user.id}>
      <SC.User>
        <SC.Image src={avatar} alt="avatar" />
        <div>
          <SC.Text>{user.name}</SC.Text>
          <SC.Text $email>{user.email}</SC.Text>
        </div>
      </SC.User>
      <Button onClick={() => setFriend(!friend)}>
        {friend ? "В друзьях" : "Добавить в друзья"}
      </Button>
    </SC.Div>
  );
};
