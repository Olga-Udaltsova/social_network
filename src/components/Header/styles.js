import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Links = styled.div`
  display: flex;
  gap: 30px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: #000;
  position: relative;
  font-size: 18px;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #6261ba;
    border-radius: 5px;
    transform: scaleX(0);
    transition: all 0.6s ease;
    bottom: 0;
    left: 0;
  }
  &:hover::before,
  &:focus::before {
    transform: scaleX(1);
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 30px;
`;
