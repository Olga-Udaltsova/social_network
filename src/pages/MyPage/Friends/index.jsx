import { useSelector } from "react-redux";
import { Section } from "../../../components/ui/Section";
import { NoContent } from "../../../components/ui/NoContent";
import { toFilterFriends } from "../../../helpers/toFilter";
import { Friend } from "./Friend";
import * as SC from "./styles";

export const Friends = () => {
  const { user } = useSelector((state) => state.currentUser);
  const { friends } = useSelector((state) => state.friends);
  const myFriends = toFilterFriends(user, friends);

  return (
    <Section>
      <SC.Friends>
        {myFriends ? (
          myFriends.listOfFriends.map((friend) => (
            <Friend key={friend.id} friend={friend} />
          ))
        ) : (
          <NoContent>Нет друзей</NoContent>
        )}
      </SC.Friends>
    </Section>
  );
};
