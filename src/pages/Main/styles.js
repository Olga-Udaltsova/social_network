import styled from "styled-components";
import unwrap from "../../icons/unwrap.png";

export const PostsSection = styled.div`
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  word-wrap: break-word;
  align-items: center;
`;

export const List = styled.select`
  appearance: none;
  outline: none;
  cursor: pointer;
  padding: 10px 25px 10px 5px;
  margin-left: 100px;
  font-size: 16px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #413b47;
  background: url(${unwrap}) no-repeat right / 25px;
  &:hover {
    border-bottom: 2px solid #b993d6;
  }
`;
