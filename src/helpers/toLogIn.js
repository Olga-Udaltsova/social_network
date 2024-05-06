import { ADMIN } from "../constants";

export const toLogIn = (inputData, isChecked, navigate) => {
  const users = JSON.parse(localStorage.getItem("users"));
  const userInLS = users.some((user) => user.email === inputData.email);
  const successfulLogin = users.find(
    (user) =>
      user.email === inputData.email && user.password === inputData.password
  );
  const admin =
    inputData.email === ADMIN.email &&
    inputData.password === ADMIN.password &&
    isChecked;

  if (!userInLS && !admin) {
    alert("Пользователя с таким email не существует");
    return;
  } else if (successfulLogin || admin) {
    navigate("/main");
    return;
  }
  alert("Неправильный пароль");
};
