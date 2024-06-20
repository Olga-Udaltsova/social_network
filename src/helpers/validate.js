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
      const uppercaseRegExp = /(?=.*?[A-Z])/.test(value);
      const lowercaseRegExp = /(?=.*?[a-z])/.test(value);
      const digitsRegExp = /(?=.*?[0-9])/.test(value);
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/.test(value);
      const minLengthRegExp = /.{8,}/.test(value);
      if (!minLengthRegExp) {
        validate[name] = "minLengthRegExp";
      }
      if (!uppercaseRegExp) {
        validate[name] = "uppercaseRegExp";
      }
      if (!lowercaseRegExp) {
        validate[name] = "lowercaseRegExp";
      }
      if (!digitsRegExp) {
        validate[name] = "digitsRegExp";
      }
      if (!specialCharRegExp) {
        validate[name] = "specialCharRegExp";
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
