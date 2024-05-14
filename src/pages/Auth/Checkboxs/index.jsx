import * as SC from "./styles";

export const Checkboxs = ({ isAdmin, handleChange, isGuest, setIsGuest }) => {
  return (
    <>
      <SC.Label>
        <input
          type="checkbox"
          id="checkbox"
          checked={isAdmin}
          onChange={() => handleChange()}
        />
        <label htmlFor="checkbox">Войти как администратор</label>
      </SC.Label>
      <SC.Label>
        <input
          type="checkbox"
          id="guest"
          checked={isGuest}
          onChange={() => setIsGuest(!isGuest)}
        />
        <label htmlFor="guest">Войти как гость</label>
      </SC.Label>
    </>
  );
};
