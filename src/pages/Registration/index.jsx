import { useState } from "react";
import form from "../../images/registration_form.svg";
import { Container } from "../../components/Container";
import { Button } from "../../components/ui/Button";
import { FormElement } from "../../components/FormElement";
import { Label } from "../../components/FormElement/Label";
import { Input } from "../../components/FormElement/Input";
import { Modal } from "../../components/ui/Modal";
import { Heading } from "../../components/ui/Heading";
import * as SC from "./styles";

export const Registration = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [successfulRegistration, setSuccessfulRegistration] = useState(false);

  const onChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSuccessfulRegistration(true);
    console.log("Успешная регистрация", formValues);
  };

  return (
    <Container>
      <SC.Registration>
        <SC.Picture src={form} alt="form" />
        <SC.Form onSubmit={onSubmit}>
          <Heading>Регистрация</Heading>
          <FormElement>
            <Input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
            <Label htmlFor="name" text="Ваше имя: " />
          </FormElement>
          <FormElement>
            <Input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
            <Label htmlFor="email" text="Ваш email: " />
          </FormElement>
          <FormElement>
            <Input
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
            <Label htmlFor="password" text="Придумайте пароль: " />
          </FormElement>
          <FormElement>
            <Input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              value={formValues.repeatPassword}
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
            <Label htmlFor="repeatPassword" text="Повторите пароль: " />
          </FormElement>

          <Button type="submit" onClick={onSubmit}>
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
