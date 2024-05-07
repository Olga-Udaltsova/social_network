import { useNavigate } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import * as SC from "./styles";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <Container>
      <SC.Header>
        <SC.Links>
          <SC.Link to="">Главная</SC.Link>
          <SC.Link to="my">Профиль</SC.Link>
          <SC.Link to="users">Пользователи</SC.Link>
        </SC.Links>
        <SC.Buttons>
          <Button onClick={logOut}>Выход</Button>
        </SC.Buttons>
      </SC.Header>
    </Container>
  );
};
