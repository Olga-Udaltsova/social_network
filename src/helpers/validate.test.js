import { validate } from "./validate";

const errorsFromFormValues = null;

describe("Проверяем работу валидации", () => {
  test("При регистрации email - admin@ya.ru выводится ошибка", () => {
    const formValues = {
      name: "Olga",
      email: "admin@ya.ru",
      password: "111",
      repeatPassword: "111",
    };
    expect(
      validate(errorsFromFormValues, formValues, "email", formValues.email)
    ).toStrictEqual({
      "email": "Данный email занят, пожалуйста, укажите другой email",
    });
  });

  test("Если пароли не совпадают выводится ошибка", () => {
    const formValues = {
      name: "Olga",
      email: "ou@ya.ru",
      password: "111",
      repeatPassword: "123",
    };
    expect(
      validate(
        errorsFromFormValues,
        formValues,
        "repeatPassword",
        formValues.repeatPassword
      )
    ).toStrictEqual({ "repeatPassword": "Пароли не совпадают" });
  });

  test("Если не введено имя пользователя и пароли не совпадают выводятся ошибки", () => {
    const formValues = {
      name: "",
      email: "ou@ya.ru",
      password: "111",
      repeatPassword: "123",
    };
    expect(
      validate(errorsFromFormValues, formValues, "name", formValues.name)
    ).toStrictEqual({ "name": "Пожалуйста, укажите имя" });
    expect(
      validate(
        errorsFromFormValues,
        formValues,
        "repeatPassword",
        formValues.repeatPassword
      )
    ).toStrictEqual({ "repeatPassword": "Пароли не совпадают" });
  });
});
