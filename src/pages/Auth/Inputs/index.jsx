import { FormElement } from "../../../components/ui/FormElement";
import { Input } from "../../../components/ui/Input";
import { Label } from "../../../components/ui/Label";
import * as SC from "./styles";

export const Inputs = ({ onChange, isChecked, handleChange }) => (
  <>
    <FormElement>
      <Input
        type="email"
        id="email"
        onChange={(e) => onChange("email", e.target.value)}
      />
      <Label htmlFor="email" text="Email" />
    </FormElement>

    <FormElement>
      <Input
        type="password"
        id="password"
        onChange={(e) => onChange("password", e.target.value)}
      />
      <Label htmlFor="password" text="Пароль" />
    </FormElement>

    <SC.Label>
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={() => handleChange()}
      />
      <label htmlFor="checkbox">Войти как администратор</label>
    </SC.Label>
  </>
);
