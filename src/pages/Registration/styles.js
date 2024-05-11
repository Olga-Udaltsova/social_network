import styled, { keyframes } from "styled-components";

const appearance = keyframes`
from {
      transform: translateY(-200%);
    }
to {
      transform: translateY(0);
    }
`;

export const Registration = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  gap: 30px;
  padding: 30px;
  margin: 100px auto;
  background: #edf2fb;
  border-radius: 30px;
  box-shadow: 0px 20px 16px 2px #a8b2e3;
  animation: ${appearance} 3s forwards;
`;

export const Picture = styled.img`
  width: 400px;
`;

export const Form = styled.form`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin: auto 0;
  text-align: center;
`;

export const ModalText = styled.div`
  text-align: center;
  font-size: 20px;
`;
