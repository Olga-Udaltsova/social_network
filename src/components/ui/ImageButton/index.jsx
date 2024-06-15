import * as SC from "./styles";

export const ImageButton = ({ className, func, icon }) => (
  <SC.ImageButton className={className} src={icon} alt="icon" onClick={func} />
);
