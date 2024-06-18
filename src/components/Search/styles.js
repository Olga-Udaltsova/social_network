import styled from "styled-components";
import search from "../../icons/search.svg";

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > input {
    margin: 20px 0;
    outline: none;
    padding: 10px 40px 10px 10px;
    border: none;
    border-radius: 8px;
    border-bottom: 1px solid #383f82;
    font-size: 17px;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-size: 40px;
    background-position: right;
    &:hover {
      outline: 1px solid #7b83c7;
    }
  }
`;
