import { useSelector } from "react-redux";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { Info } from "../../components/Info";
import { Friends } from "../../components/Friends";
import { Posts } from "../../components/Posts";

export const MyPage = () => {
  const { user } = useSelector((state) => state.currentUser);
  return (
    <Container>
      <Heading>Мой профиль</Heading>
      <Info currentUser={user} />
      <Heading>Мои друзья</Heading>
      <Friends currentUser={user} />
      <Heading>Мои посты</Heading>
      <Posts currentUser={user} />
    </Container>
  );
};
