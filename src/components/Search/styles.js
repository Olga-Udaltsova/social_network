import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > img {
    width: 40px;
  }
  > input {
    margin: 20px 0;
    outline: none;
    padding: 10px;
    border: none;
    border-radius: 8px;
    border-bottom: 1px solid #383f82;
    font-size: 17px;
    &:hover {
      outline: 1px solid #7b83c7;
    }
  }
`;
