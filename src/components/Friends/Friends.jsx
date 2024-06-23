import { useSelector } from "react-redux";
import { Section } from "../ui/Section/Section";
import { NoContent } from "../ui/NoContent/NoContent";
import { filterFriends } from "../../helpers/filter";
import { Friend } from "./Friend/Friend";
import * as SC from "./styles";

export const Friends = ({ currentUser }) => {
  const { friends } = useSelector((state) => state.friends);
  const myFriends = filterFriends(currentUser, friends);

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
