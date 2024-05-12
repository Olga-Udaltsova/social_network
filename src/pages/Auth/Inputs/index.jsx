import { FormElement } from "../../../components/ui/FormElement";
import { Input } from "../../../components/ui/Input";
import { Label } from "../../../components/ui/Label";
import * as SC from "./styles";

export const Inputs = ({
  onChange,
  isAdmin,
  handleChange,
  isGuest,
  setIsGuest,
}) => (
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
        checked={isAdmin}
        onChange={() => handleChange()}
      />
      <label htmlFor="checkbox">Войти как администратор</label>
    </SC.Label>
    <SC.Label>
      <input
        type="checkbox"
        id="guest"
        checked={isGuest}
        onChange={() => setIsGuest(!isGuest)}
      />
      <label htmlFor="guest">Войти как гость</label>
    </SC.Label>
  </>
);
