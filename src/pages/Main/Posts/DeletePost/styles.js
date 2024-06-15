import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    width: 35px;
  }
  > p {
    font-size: 16px;
    color: transparent;
    background-clip: text;
    background-image: linear-gradient(to right, #ff0000, #990000);
    transition: all 0.3s ease-in;
    opacity: 0;
  }
  &:hover {
    > p {
      opacity: 1;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
