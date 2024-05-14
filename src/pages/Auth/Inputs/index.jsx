import { FormElement } from "../../../components/ui/FormElement";
import { Input } from "../../../components/ui/Input";
import { Label } from "../../../components/ui/Label";

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

    <FormElement>
      <Input
        type="password"
        id="password"
        onChange={(e) => onChange("password", e.target.value)}
      />
      <Label htmlFor="password" text="Пароль" />
    </FormElement>
  </>
);
