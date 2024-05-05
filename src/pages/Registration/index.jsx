import { useState } from "react";
import form from "../../images/registration_form.svg";
import { Container } from "../../components/Container";
import { Button } from "../../components/ui/Button";
import { FormElement } from "../../components/FormElement";
import { Label } from "../../components/FormElement/Label";
import { Input } from "../../components/FormElement/Input";
import { Modal } from "../../components/ui/Modal";
import { Heading } from "../../components/ui/Heading";
import { toValidate } from "../../helpers/toValidate";
import { toRegister } from "../../helpers/toRegister";
import { VALUES } from "../../constants";
import * as SC from "./styles";

export const Registration = () => {
  const [formValues, setFormValues] = useState(VALUES);
  const [errorsFromFormValues, setErrorsFromFormValues] = useState();
  const [error, setError] = useState(false);
  const [successfulRegistration, setSuccessfulRegistration] = useState(false);

  const onChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
    validateFormValues(name, value);
  };

  const validateFormValues = (name, value) => {
    setErrorsFromFormValues(
      toValidate(errorsFromFormValues, formValues, name, value)
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    toRegister(
      formValues,
      errorsFromFormValues,
      setSuccessfulRegistration,
      setError
    );
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
              onBlur={(e) => validateFormValues(e.target.name, e.target.value)}
            />
            <Label htmlFor="name" text="Ваше имя: " />
            {errorsFromFormValues && <div>{errorsFromFormValues.name}</div>}
          </FormElement>
          <FormElement>
            <Input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={(e) => onChange(e.target.name, e.target.value)}
              onBlur={(e) => validateFormValues(e.target.name, e.target.value)}
            />
            <Label htmlFor="email" text="Ваш email: " />
            {errorsFromFormValues && <div>{errorsFromFormValues.email}</div>}
          </FormElement>
          <FormElement>
            <Input
              type="password"
              autoComplete="off"
              id="password"
              name="password"
              value={formValues.password}
              onChange={(e) => onChange(e.target.name, e.target.value)}
              onBlur={(e) => validateFormValues(e.target.name, e.target.value)}
            />
            <Label htmlFor="password" text="Придумайте пароль: " />
            {errorsFromFormValues && <div>{errorsFromFormValues.password}</div>}
          </FormElement>
          <FormElement>
            <Input
              type="password"
              autoComplete="off"
              id="repeatPassword"
              name="repeatPassword"
              value={formValues.repeatPassword}
              onChange={(e) => onChange(e.target.name, e.target.value)}
              onBlur={(e) => validateFormValues(e.target.name, e.target.value)}
            />
            <Label htmlFor="repeatPassword" text="Повторите пароль: " />
            {errorsFromFormValues && (
              <div>{errorsFromFormValues.repeatPassword}</div>
            )}
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
      {error && (
        <Modal>
          <SC.ModalText>
            Проверьте, все ли данные введены правильно и нет ли пустых полей
          </SC.ModalText>
          <Button onClick={() => setError(false)}>Ок</Button>
        </Modal>
      )}
    </Container>
  );
};
