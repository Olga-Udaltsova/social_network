import styled from "styled-components";

export const Publication = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px;
  border-radius: 20px;
  background: #777fc7b8;
  font-size: 18px;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CommentBlock = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`

export const Comment = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  resize: none;
  outline: none;
`;
