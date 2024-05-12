import styled from "styled-components";

export const Avatar = styled.img`
  width: ${(props) => props.$value};
  border-radius: ${(props) => props.$radius};
`;
