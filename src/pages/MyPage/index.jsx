import { useSelector } from "react-redux";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { NoContent } from "../../components/ui/NoContent";
import { MyInfo } from "./MyInfo";
import { Friends } from "./Friends";
import { Posts } from "./Posts";

export const MyPage = () => {
  const { user } = useSelector((state) => state.currentUser);
  return (
    <Container>
      {user ? (
        <>
          <Heading>Мой профиль</Heading>
          <MyInfo />
          <Heading>Мои друзья</Heading>
          <Friends />
          <Heading>Мои посты</Heading>
          <Posts />
        </>
      ) : (
        <NoContent>Авторизуйтесь!</NoContent>
      )}
    </Container>
  );
};
