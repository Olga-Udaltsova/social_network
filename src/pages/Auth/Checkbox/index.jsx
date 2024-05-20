import * as SC from "./styles";

export const Checkbox = ({ isAdmin, handleChange }) => (
  <SC.Label>
    <input
      type="checkbox"
      id="checkbox"
      checked={isAdmin}
      onChange={() => handleChange()}
    />
    <label htmlFor="checkbox">Войти как администратор</label>
  </SC.Label>
);
