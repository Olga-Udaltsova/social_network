import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
`;

export const PostsSection = styled.div`
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

export const Image = styled.img`
  position: absolute;
  width: 450px;
  top: 15px;
  left: -80px;
`;

export const Background = styled.img`
  position: absolute;
  width: 500px;
  top: 0;
  right: -50px;
`;
