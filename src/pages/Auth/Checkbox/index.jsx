import * as SC from "./styles";

export const Checkbox = ({ isChecked, handleChange }) => (
  <SC.Checkbox>
    <SC.Label>
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={() => handleChange()}
      />
      <label htmlFor="checkbox" />
    </SC.Label>
    <p>Войти как администратор</p>
  </SC.Checkbox>
);
