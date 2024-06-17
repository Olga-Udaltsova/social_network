import styled from "styled-components";

export const Posts = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 10px 20px;
  font-size: 18px;
  border: 1px solid #5e5da6;
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
  gap: 15px;
  text-align: start;
  div {
    display: flex;
    gap: 15px;
    align-items: center;
    font-size: 19px;
  }
`;
