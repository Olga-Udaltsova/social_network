import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  margin-top: 15px;
  border-bottom: 2px solid;
  border-image: linear-gradient(45deg, #b993d6, #8ca6db) 1;
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

export const ShowProfile = styled.div`
  margin: 15px 0;
`;

export const Text = styled.p`
  text-align: center;
  font-size: ${(props) => (props.$email ? "15px" : "24px")};
`;

export const Image = styled.img`
  width: 60px;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

export const Friend = styled.img`
  width: 60px;
`;
