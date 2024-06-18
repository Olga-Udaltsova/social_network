import { USERS, ADMIN } from "../constants";
import { login, loginAsAdmin } from "../redux/slices/userSlice";

export const logIn = (inputData, navigate, dispatch) => {
  const users = JSON.parse(localStorage.getItem(USERS));
  const userInLS = users?.some((user) => user.email === inputData.email);
  const currentUser = users?.find(
    (user) =>
      user.email === inputData.email && user.password === inputData.password
  );
  const admin =
    inputData.email === ADMIN.email && inputData.password === ADMIN.password;

  if (!userInLS && !admin) {
    alert("Пользователя с таким email не существует");
    return;
  } else if (currentUser) {
    const data = {
      id: currentUser.id,
      name: currentUser.name,
      email: currentUser.email,
    };
    dispatch(login(data));
    navigate("/main");
    return;
  } else if (admin) {
    dispatch(loginAsAdmin(admin));
    navigate("/main");
    return;
  }
  alert("Неправильный пароль");
};
