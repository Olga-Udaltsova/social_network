import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 20px;
  > button {
    border: none;
    background: none;
    font-size: 18px;
  }
`;

export const ReadMore = styled(Link)`
  text-decoration: none;
  color: #794ed4;
  &:hover {
    color: #fff;
    text-shadow: 0 0 5px #6663f2, 0 0 25px #6663f2, 0 0 50px #6663f2,
      0 0 100px #6663f2;
  }
`;
