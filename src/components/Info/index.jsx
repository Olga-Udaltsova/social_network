import { Section } from "../ui/Section";
import { Avatar } from "../ui/Avatar";
import * as SC from "./styles";

export const Info = ({ currentUser }) => {
  const { name, email } = currentUser;
  return (
    <Section>
      <Avatar $value="200px" $radius="100px" />
      <SC.Info>
        <SC.Text>{name}</SC.Text>
        <SC.Text $email>{email}</SC.Text>
      </SC.Info>
    </Section>
  );
};
