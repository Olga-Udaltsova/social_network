import * as SC from "./styles";

export const ImageButton = ({ func, icon, style }) => (
  <SC.ImageButton
    style={style ? style : null}
    src={icon}
    alt="icon"
    onClick={func}
  />
);
