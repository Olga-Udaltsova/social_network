import styled from "styled-components";

export const Heading = styled.h2`
  font-size: 25px;
  text-align: ${(props) => (props.$center ? "center" : "start")};
`;
