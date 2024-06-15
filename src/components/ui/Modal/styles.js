import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  gap: 30px;
  flex-direction: column;
  border-radius: 20px;
  background: #fff;
  padding: 20px 30px;
`;
