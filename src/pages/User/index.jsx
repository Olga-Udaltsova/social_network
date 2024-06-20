import { useParams } from "react-router-dom";
import { USERS } from "../../constants";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { Info } from "../../components/Info";
import { Friends } from "../../components/Friends";
import { Posts } from "../../components/Posts";

export const User = () => {
  const { id } = useParams();
  const people = JSON.parse(localStorage.getItem(USERS));
  const findedPerson = people.find((item) => item.id === Number(id));

  return (
    <Container>
      <Heading>Профиль пользователя {findedPerson.name}</Heading>
      <Info currentUser={findedPerson} />
      <Heading>Друзья</Heading>
      <Friends currentUser={findedPerson} />
      <Heading>Посты</Heading>
      <Posts currentUser={findedPerson} />
    </Container>
  );
};
