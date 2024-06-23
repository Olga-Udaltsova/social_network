import { useSelector } from "react-redux";
import { Container } from "../../components/ui/Container/Container";
import { Heading } from "../../components/ui/Heading/Heading";
import { Info } from "../../components/Info/Info";
import { Friends } from "../../components/Friends/Friends";
import { Posts } from "../../components/Posts/Posts";

const MyPage = () => {
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

export default MyPage;
