import { useState } from "react";
import { FormElement } from "../ui/FormElement/FormElement";
import { Input } from "../ui/Input/Input";
import { Label } from "../ui/Label/Label";
import show from "../../icons/show.png";
import noShow from "../../icons/noShow.png";
import * as SC from "./styles";

export const InputPassword = ({ ...props }) => {
  const [type, setType] = useState("password");

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      return;
    } else {
      setType("password");
    }
  };

  return (
    <FormElement>
      <Input type={type} id={props.id} {...props} />
      <SC.Eye
        src={type === "password" ? noShow : show}
        alt="eye"
        onClick={handleToggle}
      />
      <Label htmlFor={props.htmlFor} text={props.text} />
    </FormElement>
  );
};
