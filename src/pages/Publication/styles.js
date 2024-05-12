import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  position: absolute;
  width: 450px;
  top: 15px;
  left: -80px;
`;

export const Background = styled.img`
  position: absolute;
  width: 450px;
  top: 0;
  right: -50px;
`;

export const Publication = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  outline: none;
  border: 3px solid #5e5da6;
  border-radius: 10px;
  font-size: 15px;
  padding: 5px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 15px;
`;
