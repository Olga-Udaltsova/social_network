import styled from "styled-components";

export const Publication = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 10px 0 5px;
  border-radius: 20px;
  font-size: 18px;
  border: 1px solid #5e5da6;
  border-radius: 10px;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CommentBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 0 20px;
  div {
    width: 100%;
  }
`;

export const Comment = styled.textarea`
  width: 100%;
  padding: 5px;
  border: none;
  border-radius: 10px;
  resize: none;
  outline: none;
`;

export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  img {
    width: 40px;
  }
`;
