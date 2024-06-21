import { useParams } from "react-router-dom";
import { USERS } from "../../constants";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { Info } from "../../components/Info";
import { Friends } from "../../components/Friends";
import { Posts } from "../../components/Posts";
import { Link } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const people = JSON.parse(localStorage.getItem(USERS));
  const findedPerson = people.find((item) => item.id === Number(id));

  return (
    <Container>
      <div style={{ fontSize: "18px", paddingBottom: "17px" }}>
        <Link to={"../users"}>Вернуться к пользователям</Link>
      </div>
      <Heading>Профиль пользователя {findedPerson.name}</Heading>
      <Info currentUser={findedPerson} />
      <Heading>Друзья</Heading>
      <Friends currentUser={findedPerson} />
      <Heading>Посты</Heading>
      <Posts currentUser={findedPerson} />
    </Container>
  );
};

export default User;
