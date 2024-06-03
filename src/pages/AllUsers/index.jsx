import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { Users } from "./Users";
import { NoContent } from "../../components/ui/NoContent";
import { USERS } from "../../constants";
import { useDebounce } from "../../hooks/useDebounce";
import * as SC from "./styles";

export const AllUsers = () => {
  const { user } = useSelector((state) => state.currentUser);
  const [people, setPeople] = useState(
    JSON.parse(localStorage.getItem(USERS)).filter(
      (item) => item.id !== user.id
    )
  );

  const [search, setSearch] = useState("");
  const { debouncedValue } = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedValue.length > 0) {
      setPeople(
        people.filter((person) =>
          person.name.toLowerCase().includes(debouncedValue)
        )
      );
    } else if (!debouncedValue) {
      setPeople(
        JSON.parse(localStorage.getItem(USERS)).filter(
          (item) => item.id !== user.id
        )
      );
    }
  }, [debouncedValue]);

  return (
    <Container>
      <Heading $center>Пользователи</Heading>
      <SC.Search
        type="text"
        placeholder="Поиск"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
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
