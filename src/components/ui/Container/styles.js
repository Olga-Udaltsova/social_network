import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  &.header {
    position: sticky;
    top: 0.1px;
    background: #c1d3fe;
    margin: 0 auto;
    padding: 15px 0;
    border-bottom: 6px solid;
    border-image: linear-gradient(45deg, #9d50bb, #6e48aa) 1;
  }
`;
