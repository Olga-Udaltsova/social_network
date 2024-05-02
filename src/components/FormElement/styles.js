import styled from "styled-components";

export const FormElement = styled.div`
  position: relative;
  margin: 0 15px;
  Input:focus ~ Label,
  Input:valid ~ Label {
    top: -20px;
    color: #7c83c2;
  }
`;
