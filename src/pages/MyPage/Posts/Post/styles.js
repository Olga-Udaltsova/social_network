import styled from "styled-components";

export const Post = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  text-align: center;
  padding: 15px;
  border: 2px solid #6261ba;
  border-radius: 15px;
  word-wrap: break-word;
  font-size: 20px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
