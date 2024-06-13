export const validate = (errorsFromFormValues, formValues, name, value) => {
  const validate = { ...errorsFromFormValues, [name]: "" };

  switch (name) {
    case "name":
      if (!value) {
        validate[name] = "Пожалуйста, укажите имя";
      }
      break;

    case "email":
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
          value
        );
      if (!emailRegex) {
        validate[name] = "Проверьте правильность ввода email";
      }
      if (!value) {
        validate[name] = "Пожалуйста, укажите email";
      } else if (value === "admin@ya.ru") {
        validate[name] = "Данный email занят, пожалуйста, укажите другой email";
      }
      break;

    case "password":
      const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(value);
      if (!passwordRegex) {
        validate[name] = "Пароль не соответствует требованиям";
      }
      if (!value) {
        validate[name] = "Пожалуйста, введите пароль";
      } else if (
        formValues.repeatPassword &&
        value !== formValues.repeatPassword
      ) {
        validate["repeatPassword"] = "Пароли не совпадают";
      }
      break;

    case "repeatPassword":
      if (!value) {
        validate[name] = "Пожалуйста, повторите пароль";
      } else if (formValues.password && value !== formValues.password) {
        validate[name] = "Пароли не совпадают";
      }
      break;

    default:
      break;
  }

  return validate;
};
