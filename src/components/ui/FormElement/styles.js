import styled from "styled-components";

export const FormElement = styled.div`
  position: relative;
  Input:focus ~ Label,
  Input:valid ~ Label,
  Input[type="email"]:user-invalid ~ Label,
  Input:not(:empty) ~ Label {
    top: -20px;
    color: #7c83c2;
  }
`;
