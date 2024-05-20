import { USERS, ADMIN } from "../constants";
import { login } from "../redux/slices/userSlice";

export const toLogIn = (inputData, isChecked, navigate, dispatch) => {
  const users = JSON.parse(localStorage.getItem(USERS));
  const userInLS = users.some((user) => user.email === inputData.email);
  const currentUser = users.find(
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
  } else if (currentUser || admin) {
    dispatch(login(currentUser));
    navigate("/main");
    return;
  }
  alert("Неправильный пароль");
};
