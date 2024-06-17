import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 20px;
  text-shadow: 0px 2px 0px rgba(255, 255, 255, 0.9);
  color: #58578f;
  div {
    cursor: pointer;
    &.disabled {
      color: #b1b0ff;
      text-shadow: none;
      cursor: default;
    }
  }
`;
