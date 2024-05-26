import styled from "styled-components";

export const DeleteBlock = styled.div`
  margin: 10px 50px;
`;

export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 40px;
  }
  &:hover {
    &:before {
      content: "Удалить";
      font-size: 20px;
      color: transparent;
      background-clip: text;
      background-image: linear-gradient(to right, #ff0000, #990000);
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
