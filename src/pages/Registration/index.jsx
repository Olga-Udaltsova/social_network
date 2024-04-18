import { useState } from "react";
import form from "../../images/registration_form.svg";
import { Container } from "../../components/Container";
import { Button } from "../../components/ui/Button";
import { FormElement } from "../../components/FormElement";
import { Modal } from "../../components/ui/Modal";
import * as SC from "./styles";
import { Heading } from "../../components/ui/Heading";

export const Registration = () => {
  const [successfulRegistration, setSuccessfulRegistration] = useState(false);
  return (
    <Container>
      <SC.Registration>
        <SC.Picture src={form} alt="form" />
        <SC.Form>
          <Heading>Регистрация</Heading>
          <FormElement type="text" id="name" htmlFor="name" text="Ваше имя: " />
          <FormElement
            type="email"
            id="email"
            htmlFor="email"
            text="Ваш email: "
          />
          <FormElement
            type="password"
            id="password"
            htmlFor="password"
            text="Придумайте пароль: "
          />
          <FormElement
            type="password"
            id="repeatPassword"
            htmlFor="repeatPassword"
            text="Повторите пароль: "
          />
          <Button onClick={() => setSuccessfulRegistration(true)}>
            Зарегистрироваться
          </Button>
        </SC.Form>
      </SC.Registration>
      {successfulRegistration && (
        <Modal>
          <SC.ModalText>Вы успешно зарегистрировались!</SC.ModalText>
          <Button to="/">Ок</Button>
        </Modal>
      )}
    </Container>
  );
};
