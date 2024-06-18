import styled from "styled-components";

export const Posts = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 10px 20px;
  font-size: 18px;
  border: 2px solid #5e5da6;
  border-radius: 10px;
  text-align: center;
`;

export const Publication = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  > div:first-child {
    display: flex;
    gap: 20px;
  }
`;

export const Information = styled.div`
  display: flex;
  gap: 10px;
  text-align: start;
  font-size: 19px;
`;

export const Private = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  > img {
    width: 30px;
  }
  &:hover {
    &::after {
      content: "Для друзей";
      font-size: 13px;
      color: #14141a;
      background-clip: text;
      > p {
        opacity: 1;
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;
