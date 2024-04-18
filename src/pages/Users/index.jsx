import { Container } from "../../components/Container";
import { Heading } from "../../components/ui/Heading";
import * as SC from "./styles";

export const Users = () => {
  return (
    <Container>
      <SC.Users>
        <Heading>Пользователи</Heading>
        <div>Пользователь 1</div>
        <div>Пользователь 2</div>
        <div>Пользователь 3</div>
      </SC.Users>
    </Container>
  );
};
