export const toRegister = (
  formValues,
  errorsFromFormValues,
  setSuccessfulRegistration,
  setError
) => {
  if (
    !formValues.name ||
    !formValues.email ||
    !formValues.password ||
    !formValues.repeatPassword ||
    errorsFromFormValues.name ||
    errorsFromFormValues.email ||
    errorsFromFormValues.password ||
    errorsFromFormValues.repeatPassword
  ) {
    setSuccessfulRegistration(false);
    setError(true);
    return;
  }
  const users = JSON.parse(localStorage.getItem("users"));
  const userId = Date.now();
  const newUser = { id: userId, ...formValues };

  if (!users) {
    localStorage.setItem("users", JSON.stringify([newUser]));
    setSuccessfulRegistration(true);
    return;
  }
  if (users.find((user) => user.email === formValues.email)) {
    setSuccessfulRegistration(false);
    alert("Пользователь с таким email уже существует!");
    return;
  }
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  setSuccessfulRegistration(true);
};
