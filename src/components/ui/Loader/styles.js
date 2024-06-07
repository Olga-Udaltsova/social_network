import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
`;

export const Border = styled.div`
  width: 150px;
  height: 150px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(63, 249, 220);
  background: linear-gradient(
    0deg,
    rgba(63, 249, 220, 0.1) 33%,
    rgba(63, 249, 220, 1) 100%
  );
  animation: ${spin} 0.8s linear 0s infinite;
`;

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c1d3fe;
  border-radius: 50%;
`;
