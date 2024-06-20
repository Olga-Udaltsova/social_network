import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: ${(props) => (props.$email ? "15px" : "25px")};
`;
