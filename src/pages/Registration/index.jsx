import { useState } from "react";
import { Container } from "../../components/ui/Container";
import { Button } from "../../components/ui/Button";
import { Modal } from "../../components/ui/Modal";
import { Heading } from "../../components/ui/Heading";
import { toValidate } from "../../helpers/toValidate";
import { toRegister } from "../../helpers/toRegister";
import { Inputs } from "./Inputs";
import { VALUES } from "../../constants";
import form from "../../images/registration_form.svg";
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
    if (
      !formValues.name ||
      !formValues.email ||
      !formValues.password ||
      !formValues.repeatPassword ||
      errorsFromFormValues.name ||
      errorsFromFormValues.email ||
      errorsFromFormValues.password ||
      errorsFromFormValues.repeatPassword
    ) {
      setSuccessfulRegistration(false);
      setError(true);
      return;
    }
    toRegister(formValues, setSuccessfulRegistration);
  };

  return (
    <Container>
      <SC.Registration>
        <SC.Picture src={form} alt="form" />
        <SC.Form onSubmit={onSubmit}>
          <Heading>Регистрация</Heading>
          <Inputs
            formValues={formValues}
            onChange={onChange}
            validateFormValues={validateFormValues}
            errorsFromFormValues={errorsFromFormValues}
          />
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
