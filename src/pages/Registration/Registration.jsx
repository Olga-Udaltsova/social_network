import { useState } from "react";
import { Container } from "../../components/ui/Container/Container";
import { Button } from "../../components/ui/Button/Button";
import { Modal } from "../../components/ui/Modal/Modal";
import { Heading } from "../../components/ui/Heading/Heading";
import { validate } from "../../helpers/validate";
import { register } from "../../helpers/register";
import { Inputs } from "./Inputs/Inputs";
import { VALUES } from "../../constants/constants";
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
      validate(errorsFromFormValues, formValues, name, value)
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
    register(formValues, setSuccessfulRegistration);
  };

  return (
    <Container>
      <SC.Registration>
        <SC.Picture src={form} alt="form" />
        <SC.Form onSubmit={onSubmit}>
          <SC.Div>
            <Heading $center>Регистрация</Heading>
            <p>
              Есть аккаунт? <SC.Link to="/">Войти</SC.Link>
            </p>
          </SC.Div>
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
          <Button to="/">Вернуться на страницу авторизации</Button>
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
