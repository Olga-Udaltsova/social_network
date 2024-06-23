import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container } from "../../components/ui/Container/Container";
import { Button } from "../../components/ui/Button/Button";
import { Heading } from "../../components/ui/Heading/Heading";
import { Modal } from "../../components/ui/Modal/Modal";
import { Inputs } from "./Inputs/Inputs";
import { logIn } from "../../helpers/logIn";
import welcome from "../../images/welcome.png";
import * as SC from "./styles";

export const Auth = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (name, value) => {
    setInputData({ ...inputData, [name]: value });
  };

  const toAuth = () => {
    if (!inputData.email || !inputData.password) {
      setError(true);
      return;
    }
    logIn(inputData, navigate, dispatch);
  };

  return (
    <Container>
      <SC.Text>Welcome!</SC.Text>
      <SC.Image src={welcome} alt="welcome" />
      <SC.Form>
        <Heading $center>Авторизация</Heading>
        <SC.Auth>
          <Inputs onChange={onChange} />
          <Button onClick={toAuth}>Войти</Button>
        </SC.Auth>
        <p>
          Еще нет аккаунта? <SC.Link to="reg">Регистрация</SC.Link>
        </p>
      </SC.Form>
      {error && (
        <Modal>
          <SC.ErrorText>Введите email и password!</SC.ErrorText>
          <Button onClick={() => setError(false)}>Ок</Button>
        </Modal>
      )}
    </Container>
  );
};
