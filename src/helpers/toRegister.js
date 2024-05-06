export const toRegister = (formValues, setSuccessfulRegistration) => {
  const users = JSON.parse(localStorage.getItem("users"));
  const userId = Date.now();
  const newUser = { id: userId, ...formValues };

  if (!users) {
    localStorage.setItem("users", JSON.stringify([newUser]));
    setSuccessfulRegistration(true);
    return;
  } else if (users.find((user) => user.email === formValues.email)) {
    setSuccessfulRegistration(false);
    alert("Пользователь с таким email уже существует!");
    return;
  }
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  setSuccessfulRegistration(true);
};
