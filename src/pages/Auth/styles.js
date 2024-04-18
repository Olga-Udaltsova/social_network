import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const ani = keyframes`
from {
    transform: translateY(-200%);
  }
to {
    transform: translateY(0);
  }
`;

const display = keyframes`
from {
      opacity: 0;
    }
to {
      opacity: 1;
    }
`;

export const Form = styled.div`
  position: absolute;
  width: 400px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 30px;
  border-radius: 10px;
  box-shadow: 15px 11px 12px 8px rgba(34, 60, 80, 0.2);
  background: linear-gradient(90deg, #edf2fb, #e2eafc, #d7e3fc, #edf2fb);
  top: 25%;
  right: 10%;
  transform: translateY(-200%);
  animation: ${ani} 3s forwards;
`;

export const Text = styled.h1`
  position: absolute;
  top: 30%;
  left: 25%;
  font-size: 70px;
  opacity: 0;
  animation: ${display} 3.5s forwards;
`;

export const Image = styled.img`
  position: absolute;
  width: 450px;
  top: 40%;
  left: 25%;
  animation: ${display} 2.5s forwards;
`;

export const Auth = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Label = styled.div`
  display: flex;
  text-align: center;
  gap: 10px;
`;

export const Button = styled(NavLink)`
  text-decoration: none;
  color: #000;
  &:hover {
    text-decoration: underline;
  }
`;
