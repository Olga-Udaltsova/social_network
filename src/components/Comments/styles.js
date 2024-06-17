import styled from "styled-components";

export const Comment = styled.div`
  max-width: 1000px;
  width: 100%;
  margin-bottom: 10px;
  text-align: left;
  p:first-child {
    font-weight: bold;
    font-size: 16px;
    line-height: 1.1;
  }
  span {
    margin-left: 5px;
    font-weight: normal;
    font-size: 13px;
  }
`;
