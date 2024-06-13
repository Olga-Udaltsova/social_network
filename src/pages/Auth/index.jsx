import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Container } from "../../components/ui/Container";
import { Button } from "../../components/ui/Button";
import { Heading } from "../../components/ui/Heading";
import { Modal } from "../../components/ui/Modal";
import { Inputs } from "./Inputs";
import { Checkbox } from "./Checkbox";
import { logIn } from "../../helpers/logIn";
import { ADMIN } from "../../constants";
import welcome from "../../images/welcome.png";
import * as SC from "./styles";

export const Auth = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (name, value) => {
    setInputData({ ...inputData, [name]: value });
  };

  const handleChange = () => {
    if (inputData.email !== ADMIN.email) {
      setIsChecked(isChecked);
      return;
    }
    setIsChecked(!isChecked);
  };

  const toAuth = () => {
    if (!inputData.email || !inputData.password) {
      setError(true);
      return;
    }
    logIn(inputData, isChecked, navigate, dispatch);
  };

  return (
    <Container>
      <SC.Text>Welcome!</SC.Text>
      <SC.Image src={welcome} alt="welcome" />
      <SC.Form>
        <Heading $center>Авторизация</Heading>
        <SC.Auth>
          <Inputs onChange={onChange} />
          <Checkbox isChecked={isChecked} handleChange={handleChange} />
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
