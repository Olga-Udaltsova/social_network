import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { logout } from "../../redux/slices/userSlice";
import * as SC from "./styles";

export const Header = () => {
  const { user } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(logout(user));
    navigate("/");
  };

  return (
    <Container className="header">
      <SC.Header>
        <SC.Links>
          <SC.Link to="/main">Главная</SC.Link>
          {user && (
            <>
              <SC.Link to="/main/publish">Опубликовать пост</SC.Link>
              <SC.Link to="/main/my">Профиль</SC.Link>
              <SC.Link to="/main/users">Пользователи</SC.Link>
            </>
          )}
        </SC.Links>
        <SC.Buttons>
          <Button onClick={logOut}>Выход</Button>
        </SC.Buttons>
      </SC.Header>
    </Container>
  );
};
