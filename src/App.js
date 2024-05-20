import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { NoContent } from "./components/ui/NoContent";
import "./App.css";

function App() {
  const { user, admin } = useSelector((state) => state.currentUser);
  return (
    <>
      <Header />
      {user || admin ? <Outlet /> : <NoContent>Авторизуйтесь!</NoContent>}
    </>
  );
}

export default App;
