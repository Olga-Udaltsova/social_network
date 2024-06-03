import styled from "styled-components";

export const Search = styled.input`
  margin: 20px 0;
  outline: none;
  padding: 5px;
  border: none;
  border-bottom: 1px solid #383f82;
  font-size: 15px;
  &:hover {
    outline: 1px solid #7b83c7;
  }
`;

export const Users = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 30px auto;
`;
