import * as SC from "./styles";

export const Modal = ({ children, ...props }) => (
  <SC.Modal>
    <SC.ModalContent {...props}>{children}</SC.ModalContent>
  </SC.Modal>
);
