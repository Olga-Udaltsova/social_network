import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../components/ui/Button";
import { Avatar } from "../../../components/ui/Avatar";
import {
  addToFriend,
  deleteFromFriends,
} from "../../../redux/slices/userSlice";
import * as SC from "./styles";

export const Users = ({ person }) => {
  const { id, name, email } = person;
  const { friends } = useSelector((state) => state.currentUser.currentUser);
  const [inFriend, setInFriend] = useState(
    friends?.some((item) => item.id === person.id)
  );
  const dispatch = useDispatch();

  const toggleFriend = (person) => {
    if (!inFriend) {
      dispatch(addToFriend(person));
      setInFriend(true);
      return;
    }
    dispatch(deleteFromFriends(person));
    setInFriend(false);
  };

  return (
    <SC.Div key={id}>
      <SC.User>
        <Avatar $value="150px" $radius="25px" />
        <div>
          <SC.Text>{name}</SC.Text>
          <SC.Text $email>{email}</SC.Text>
        </div>
      </SC.User>
      <Button onClick={() => toggleFriend(person)}>
        {inFriend ? "В друзьях" : "Добавить в друзья"}
      </Button>
    </SC.Div>
  );
};
