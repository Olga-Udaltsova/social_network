import styled from "styled-components";

export const CommentBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  > div {
    width: 100%;
  }
`;

export const Comment = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  resize: none;
  outline: none;
`;

export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 13px;
  color: #3a3a45;
  img {
    width: 40px;
  }
`;
