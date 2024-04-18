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

export const Input = styled.input`
  width: 100%;
  padding: 10px 10px 10px 5px;
  display: block;
  border: none;
  border-bottom: 1px solid #69696b;
  background: transparent;
  font-size: 16px;
  &:focus {
    outline: none;
    border-bottom-color: #7c83c2;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  font-size: 16px;
`;
