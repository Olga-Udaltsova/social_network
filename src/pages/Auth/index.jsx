import welcome from "../../images/welcome.png";
import { Container } from "../../components/Container";
import { FormElement } from "../../components/FormElement";
import { Button } from "../../components/ui/Button";
import * as SC from "./styles";
import { Heading } from "../../components/ui/Heading";

export const Auth = () => {
  return (
    <Container>
      <SC.Text>Welcome!</SC.Text>
      <SC.Image src={welcome} alt="welcome" />
      <SC.Form>
        <Heading>Авторизация</Heading>
        <SC.Auth>
          <FormElement 
            type="email" 
            id="email" 
            htmlFor="email" 
            text="Email" />
          <FormElement
            type="password"
            id="password"
            htmlFor="password"
            text="Пароль"
          />
          <SC.Label>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Войти как администратор</label>
          </SC.Label>
          <Button to="main">Вход</Button>
          <Button to="reg">Регистрация</Button>
        </SC.Auth>
      </SC.Form>
    </Container>
  );
};
