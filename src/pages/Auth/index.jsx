import { useNavigate } from "react-router-dom";
import { useState } from "react";
import welcome from "../../images/welcome.png";
import { Container } from "../../components/Container";
import { FormElement } from "../../components/FormElement";
import { Input } from "../../components/FormElement/Input";
import { Label } from "../../components/FormElement/Label";
import { Button } from "../../components/ui/Button";
import { Heading } from "../../components/ui/Heading";
import { Modal } from "../../components/ui/Modal";
import { toLogIn } from "../../helpers/toLogIn";
import { ADMIN } from "../../constants";
import * as SC from "./styles";

export const Auth = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

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
    toLogIn(inputData, isChecked, navigate);
  };

  return (
    <Container>
      <SC.Text>Welcome!</SC.Text>
      <SC.Image src={welcome} alt="welcome" />
      <SC.Form>
        <Heading>Авторизация</Heading>
        <SC.Auth>
          <FormElement>
            <Input
              type="email"
              id="email"
              onChange={(e) => onChange("email", e.target.value)}
            />
            <Label htmlFor="email" text="Email" />
          </FormElement>

          <FormElement>
            <Input
              type="password"
              id="password"
              onChange={(e) => onChange("password", e.target.value)}
            />
            <Label htmlFor="password" text="Пароль" />
          </FormElement>

          <SC.Label>
            <input
              type="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={() => handleChange()}
            />
            <label htmlFor="checkbox">Войти как администратор</label>
          </SC.Label>
          <Button onClick={toAuth}>Вход</Button>
          <Button to="reg">Регистрация</Button>
        </SC.Auth>
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
