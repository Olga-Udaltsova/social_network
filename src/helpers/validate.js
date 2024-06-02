export const validate = (errorsFromFormValues, formValues, name, value) => {
  const validate = { ...errorsFromFormValues, [name]: "" };

  switch (name) {
    case "name":
      if (!value) {
        validate[name] = "Пожалуйста, укажите имя";
      }
      break;

    case "email":
      if (!value) {
        validate[name] = "Пожалуйста, укажите email";
      } else if (value === "admin@ya.ru") {
        validate[name] = "Данный email занят, пожалуйста, укажите другой email";
      }
      break;

    case "password":
      if (!value) {
        validate[name] = "Пожалуйста, введите пароль";
      } else if (
        formValues.repeatPassword &&
        value !== formValues.repeatPassword
      ) {
        validate["repeatPassword"] = "Пароли не совпадают";
      } else {
        validate["repeatPassword"] = formValues.repeatPassword
          ? ""
          : errorsFromFormValues.repeatPassword;
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
