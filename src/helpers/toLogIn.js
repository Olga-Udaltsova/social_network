import { USERS, ADMIN } from "../constants";
import { login, loginAsAdmin } from "../redux/slices/userSlice";

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
  } else if (currentUser) {
    dispatch(login(currentUser));
    navigate("/main");
    return;
  } else if (admin) {
    dispatch(loginAsAdmin(admin));
    navigate("/main");
    return;
  }
  alert("Неправильный пароль");
};
