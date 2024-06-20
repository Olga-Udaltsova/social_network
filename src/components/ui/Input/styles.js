import styled from "styled-components";

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
  &:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;
