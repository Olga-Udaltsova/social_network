import { FormElement } from "../../../components/ui/FormElement";
import { Label } from "../../../components/ui/Label";
import { Input } from "../../../components/ui/Input";
import { InputPassword } from "../../../components/InputPassword";
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
      {errorsFromFormValues && (
        <SC.Error>{errorsFromFormValues.password}</SC.Error>
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
        Пароль должен содержать не менее 8 символов, заглавные и строчные буквы
        латинского алфавита (A-z), цифры и спец.символы (!@#$_%^&*)
      </SC.Text>
    </div>
  </>
);
