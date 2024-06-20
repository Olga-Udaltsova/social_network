import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "../../../components/ui/Avatar";
import { Button } from "../../../components/ui/Button";
import {
  addToFriend,
  deleteFromFriends,
} from "../../../redux/slices/friendsSlice";
import { filterFriends } from "../../../helpers/filter";
import myFriend from "../../../icons/friend.png";
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
        </SC.Info>
        <SC.ShowProfile>
          <Button to={`../${id}`}>Посмотреть профиль</Button>
        </SC.ShowProfile>
      </SC.User>
      <SC.Buttons>
        {inFriend && (
          <SC.Friend src={myFriend} alt="friend" title="В друзьях" />
        )}
        <SC.Image
          src={inFriend ? deleteUser : addUser}
          alt="addFriend"
          title={inFriend ? "Удалить из друзей" : "Добавить в друзья"}
          onClick={() => toggleFriend(person)}
        />
      </SC.Buttons>
    </SC.Div>
  );
};
