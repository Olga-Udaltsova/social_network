import { USERS } from "../constants";

export const register = (formValues, setSuccessfulRegistration) => {
  const users = JSON.parse(localStorage.getItem(USERS));
  const userId = Date.now();
  const newUser = { id: userId, ...formValues };

  if (!users) {
    localStorage.setItem(USERS, JSON.stringify([newUser]));
    setSuccessfulRegistration(true);
    return;
  } else if (users.find((user) => user.email === formValues.email)) {
    setSuccessfulRegistration(false);
    alert("Пользователь с таким email уже существует!");
    return;
  }
  users.push(newUser);
  localStorage.setItem(USERS, JSON.stringify(users));
  setSuccessfulRegistration(true);
};
