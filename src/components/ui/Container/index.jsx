import * as SC from "./styles";

export const Container = ({ children, ...props }) => (
  <SC.Container {...props}>{children}</SC.Container>
);
