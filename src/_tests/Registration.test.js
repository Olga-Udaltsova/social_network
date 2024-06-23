import { render } from "@testing-library/react";
import { Inputs } from "../pages/Registration/Inputs/Inputs";

test("Правильное заполнение формы регистрации", () => {
  const { container } = render(
    <Inputs
      formValues={{
        name: "Olga",
        email: "ou@ya.ru",
        password: "111",
        repeatPassword: "111",
      }}
    />
  );
  const name = container.querySelector(`input[name="name"]`);
  const email = container.querySelector(`input[name="email"]`);
  const password = container.querySelector(`input[name="password"]`);
  const repeatPassword = container.querySelector(
    `input[name="repeatPassword"]`
  );

  expect(name).toHaveValue("Olga");
  expect(email).toHaveValue("ou@ya.ru");
  expect(password).toHaveValue("111");
  expect(repeatPassword).toHaveValue("111");
});
