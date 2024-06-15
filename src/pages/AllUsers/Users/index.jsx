import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "../../../components/ui/Avatar";
import {
  addToFriend,
  deleteFromFriends,
} from "../../../redux/slices/friendsSlice";
import { filterFriends } from "../../../helpers/filter";
import myFriend from "../../../icons/friend.svg";
import addUser from "../../../icons/addUser.png";
import deleteUser from "../../../icons/deleteUser.png";
import * as SC from "./styles";

export const Users = ({ person }) => {
  const { id, name, email } = person;
  const { user } = useSelector((state) => state.currentUser);
  const { friends } = useSelector((state) => state.friends);
  const myFriends = filterFriends(user, friends);
  const friend = myFriends?.listOfFriends?.some(
    (item) => item.id === person.id
  );
  const [inFriend, setInFriend] = useState(friend);
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
        <SC.Info>
          <div>
            <SC.Text>{name}</SC.Text>
            <SC.Text $email>{email}</SC.Text>
          </div>
          {inFriend && <img src={myFriend} alt="friend" />}
        </SC.Info>
      </SC.User>
      <SC.Image
        src={inFriend ? deleteUser : addUser}
        alt="addFriend"
        onClick={() => toggleFriend(person)}
      />
    </SC.Div>
  );
};
