import { FormElement } from "../../../components/ui/FormElement/FormElement";
import { Input } from "../../../components/ui/Input/Input";
import { InputPassword } from "../../../components/InputPassword/InputPassword";
import { Label } from "../../../components/ui/Label/Label";

export const Inputs = ({ onChange }) => (
  <>
    <FormElement>
      <Input
        type="email"
        id="email"
        onChange={(e) => onChange("email", e.target.value)}
      />
      <Label htmlFor="email" text="Email" />
    </FormElement>
    <InputPassword
      id="password"
      onChange={(e) => onChange("password", e.target.value)}
      htmlFor="password"
      text="Пароль"
    />
  </>
);
