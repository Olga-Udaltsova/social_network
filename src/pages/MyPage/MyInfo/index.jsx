import { Section } from "../../../components/ui/Section";
import { Avatar } from "../../../components/ui/Avatar";
import { useSelector } from "react-redux";
import * as SC from "./styles";

export const MyInfo = () => {
  const { user } = useSelector((state) => state.currentUser.currentUser);
  const { name, email } = user;
  return (
    <Section>
      <Avatar $value="260px" $radius="125px" />
      <SC.Info>
        <SC.Text>{name}</SC.Text>
        <SC.Text $email>{email}</SC.Text>
      </SC.Info>
    </Section>
  );
};
