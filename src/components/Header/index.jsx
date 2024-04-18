import { Container } from "../Container";
import { Button } from "../ui/Button";
import * as SC from "./styles";

export const Header = () => (
  <Container>
    <SC.Header>
      <SC.Links>
        <SC.Link to="">Главная</SC.Link>
        <SC.Link to="my">Профиль</SC.Link>
        <SC.Link to="users">Пользователи</SC.Link>
      </SC.Links>
      <SC.Buttons>
        <Button to="/">Выход</Button>
      </SC.Buttons>
    </SC.Header>
  </Container>
);
