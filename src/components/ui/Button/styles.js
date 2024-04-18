import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Button = styled(NavLink)`
  text-decoration: none;
  padding: 5px 20px;
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
  border-color: #6261ba;
  color: #000;
  box-shadow: 0 0 40px 40px rgba(98, 97, 186, 0.7) inset,
    0 0 0 0 rgba(98, 97, 186, 1);
  transition: all 150ms ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(98, 97, 186, 0.7) inset,
      0 0 10px 4px rgba(98, 97, 186, 1);
  }
`;
