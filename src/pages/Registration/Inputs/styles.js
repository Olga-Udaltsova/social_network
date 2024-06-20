import styled from "styled-components";

export const Error = styled.p`
  color: #f00;
`;

export const Text = styled.ul`
  margin: 5px 20px;
  font-size: 10px;
  color: #9b97a1;
  text-align: left;
  > li {
    list-style-position: inside;
    &:first-child {
      list-style: none;
    }
    &.error {
      color: #f00;
    }
  }
`;
