import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  margin: 15px 0 0 0;
  border-bottom: 2px solid #9380b0;
`;

export const User = styled.div`
  display: flex;
  gap: 40px;
`;

export const Info = styled.div`
  display: flex;
  gap: 30px;
  > img {
    width: 50px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: ${(props) => (props.$email ? "15px" : "24px")};
`;

export const Image = styled.img`
  width: 60px;
  cursor: pointer;
`;