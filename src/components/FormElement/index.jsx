import * as SC from "./styles";

export const FormElement = ({ type, id, htmlFor, text }) => (
  <SC.FormElement>
    <SC.Input type={type} id={id} required />
    <SC.Label htmlFor={htmlFor}>{text}</SC.Label>
  </SC.FormElement>
);
