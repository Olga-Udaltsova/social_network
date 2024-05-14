import { useSelector } from "react-redux";
import { Section } from "../../../components/ui/Section";
import { NoContent } from "../../../components/ui/NoContent";
import { Friend } from "./Friend";
import * as SC from "./styles";

export const Friends = () => {
  const { friends } = useSelector((state) => state.currentUser.currentUser);
  return (
    <Section>
      <SC.Friends>
        {friends ? (
          friends.map((friend) => <Friend key={friend.id} friend={friend} />)
        ) : (
          <NoContent>Нет друзей</NoContent>
        )}
      </SC.Friends>
    </Section>
  );
};
