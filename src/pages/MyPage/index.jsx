import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { MyInfo } from "./MyInfo";
import { Friends } from "./Friends";
import { Posts } from "./Posts";

export const MyPage = () => (
  <Container>
    <Heading>Мой профиль</Heading>
    <MyInfo />
    <Heading>Мои друзья</Heading>
    <Friends />
    <Heading>Мои посты</Heading>
    <Posts />
  </Container>
);
