import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import { Container } from "../../components/ui/Container/Container";
import { Heading } from "../../components/ui/Heading/Heading";
import { NoContent } from "../../components/ui/NoContent/NoContent";
import { Search } from "../../components/Search/Search";
import { Pagination } from "../../components/Pagination/Pagination";
import { Users } from "./Users/Users";
import { ITEMS_PER_PAGE, USERS } from "../../constants/constants";
import { modifyData } from "../../helpers/modifyData";
import * as SC from "./styles";

const AllUsers = () => {
  const { user } = useSelector((state) => state.currentUser);
  const [people, setPeople] = useState(
    JSON.parse(localStorage.getItem(USERS)).filter(
      (item) => item.id !== user.id
    )
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data } = modifyData(people, currentPage, "NAME_ASC");
  const { debouncedValue } = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedValue.length > 0) {
      setPeople(
        people.filter((person) =>
          person.name.toLowerCase().includes(debouncedValue.toLowerCase())
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
      <Search value={search} onChange={(e) => setSearch(e.target.value)} />
      <SC.Users>
        {data.length !== 0 ? (
          data.map((person) => <Users key={person.id} person={person} />)
        ) : (
          <NoContent>Пользователей нет</NoContent>
        )}
      </SC.Users>
      {people.length > ITEMS_PER_PAGE && (
        <Pagination
          items={people}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Container>
  );
};

export default AllUsers;
