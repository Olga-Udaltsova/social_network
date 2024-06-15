import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  font-size: 20px;
  > textarea {
    resize: none;
    padding: 10px;
    outline: none;
    border: 3px solid #5e5da6;
    border-radius: 10px;
    font-size: 16px;
  }
`;
