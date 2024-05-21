import styled from "styled-components";

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  width: 20px;
  position: relative;
  margin: 0 15px;
  label {
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.7);
    &:after {
      content: "";
      width: 9px;
      height: 5px;
      position: absolute;
      top: 5px;
      left: 4px;
      border: 3px solid #15228fb8;
      border-top: none;
      border-right: none;
      opacity: 0;
      transform: rotate(-45deg);
    }
    &:hover::after {
      opacity: 0.3;
    }
  }
  input {
    visibility: hidden;
    &:checked + label:after {
      opacity: 1;
    }
  }
`;
