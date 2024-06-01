import { useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { Users } from "./Users";
import { NoContent } from "../../components/ui/NoContent";
import { USERS } from "../../constants";
import * as SC from "./styles";

export const AllUsers = () => {
  const { user } = useSelector((state) => state.currentUser);
  const [people, setPeople] = useState(
    JSON.parse(localStorage.getItem(USERS)).filter(
      (item) => item.id !== user.id
    )
  );

  return (
    <Container>
      <Heading $center>Пользователи</Heading>
      <SC.Users>
        {people.length !== 0 ? (
          people.map((person) => <Users key={person.id} person={person} />)
        ) : (
          <NoContent>Пользователей нет</NoContent>
        )}
      </SC.Users>
    </Container>
  );
};
