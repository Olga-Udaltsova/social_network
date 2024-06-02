import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../components/ui/Button";
import { Avatar } from "../../../components/ui/Avatar";
import {
  addToFriend,
  deleteFromFriends,
} from "../../../redux/slices/friendsSlice";
import { filterFriends } from "../../../helpers/filter";
import * as SC from "./styles";

export const Users = ({ person }) => {
  const { id, name, email } = person;
  const { user } = useSelector((state) => state.currentUser);
  const { friends } = useSelector((state) => state.friends);
  const myFriends = filterFriends(user, friends);
  const friend = myFriends?.listOfFriends?.some(
    (item) => item.id === person.id
  );
  const [inFriend, setInFriend] = useState(friend ? true : false);
  const dispatch = useDispatch();

  const toggleFriend = (person) => {
    if (!friend) {
      dispatch(addToFriend({ user, person }));
      setInFriend(true);
      return;
    }
    dispatch(deleteFromFriends({ user, person }));
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
        {inFriend ? "Удалить из друзей" : "Добавить в друзья"}
      </Button>
    </SC.Div>
  );
};
