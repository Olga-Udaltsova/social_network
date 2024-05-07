import { useState } from "react";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { USERS } from "../../constants";
import { Users } from "./Users";
import { NoContent } from "../../components/ui/NoContent";
import * as SC from "./styles";

export const AllUsers = () => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem(USERS)));
  return (
    <Container>
      <SC.Content>
        <Heading>Пользователи</Heading>
        {users ? (
          <SC.Users>
            {users.map((user) => (
              <Users key={user.id} user={user} />
            ))}
          </SC.Users>
        ) : (
          <NoContent>Пользователей нет</NoContent>
        )}
      </SC.Content>
    </Container>
  );
};
