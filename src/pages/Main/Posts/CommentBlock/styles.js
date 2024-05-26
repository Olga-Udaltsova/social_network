import styled from "styled-components";

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
