import { FormElement } from "../../../components/ui/FormElement/FormElement";
import { Label } from "../../../components/ui/Label/Label";
import { Input } from "../../../components/ui/Input/Input";
import { InputPassword } from "../../../components/InputPassword/InputPassword";
import * as SC from "./styles";

export const Inputs = ({
  formValues,
  onChange,
  validateFormValues,
  errorsFromFormValues,
}) => (
  <>
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
      {errorsFromFormValues && <SC.Error>{errorsFromFormValues.name}</SC.Error>}
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
      {errorsFromFormValues && (
        <SC.Error>{errorsFromFormValues.email}</SC.Error>
      )}
    </FormElement>
    <div>
      <InputPassword
        autoComplete="off"
        id="password"
        name="password"
        value={formValues.password}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        onBlur={(e) => validateFormValues(e.target.name, e.target.value)}
        htmlFor="password"
        text="Придумайте пароль: "
      />
      {errorsFromFormValues && errorsFromFormValues.password && (
        <SC.Error>Пожалуйста, введите пароль</SC.Error>
      )}
    </div>
    <div>
      <InputPassword
        autoComplete="off"
        id="repeatPassword"
        name="repeatPassword"
        value={formValues.repeatPassword}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        onBlur={(e) => validateFormValues(e.target.name, e.target.value)}
        htmlFor="repeatPassword"
        text="Повторите пароль: "
      />
      {errorsFromFormValues && (
        <SC.Error>{errorsFromFormValues.repeatPassword}</SC.Error>
      )}

      <SC.Text>
        <li
          className={
            errorsFromFormValues && errorsFromFormValues.password
              ? "error"
              : null
          }
        >
          Пароль должен содержать:
        </li>
        <li
          className={
            errorsFromFormValues &&
            errorsFromFormValues.password === "minLengthRegExp"
              ? "error"
              : null
          }
        >
          Минимум 8 символов;
        </li>
        <li
          className={
            errorsFromFormValues &&
            errorsFromFormValues.password === "uppercaseRegExp"
              ? "error"
              : null
          }
        >
          Хотя бы 1 заглавную букву;
        </li>
        <li
          className={
            errorsFromFormValues &&
            errorsFromFormValues.password === "lowercaseRegExp"
              ? "error"
              : null
          }
        >
          Хотя бы 1 строчную букву;
        </li>
        <li
          className={
            errorsFromFormValues &&
            errorsFromFormValues.password === "digitsRegExp"
              ? "error"
              : null
          }
        >
          Хотя бы 1 цифру;
        </li>
        <li
          className={
            errorsFromFormValues &&
            errorsFromFormValues.password === "specialCharRegExp"
              ? "error"
              : null
          }
        >
          Хотя бы 1 спец.символ (!@#$_%^&*).
        </li>
      </SC.Text>
    </div>
  </>
);
