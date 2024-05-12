import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const User = styled.div`
  display: flex;
  gap: 40px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: ${(props) => (props.$email ? "15px" : "24px")};
`;
