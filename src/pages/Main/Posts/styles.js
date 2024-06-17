import styled from "styled-components";

export const Posts = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 10px 20px;
  font-size: 18px;
  border: 2px solid #5e5da6;
  border-radius: 10px;
`;

export const Publication = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const Information = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: start;
  > div {
    display: flex;
    gap: 15px;
    align-items: center;
    font-size: 19px;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ForFriend = styled.p`
  font-size: 13px;
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
