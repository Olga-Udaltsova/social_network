import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import { Header } from "./components/Header/Header";
import { NoContent } from "./components/ui/NoContent/NoContent";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const { user, admin } = useSelector((state) => state.currentUser);
  return (
    <>
      <Header />
      {user || admin ? <Outlet /> : <NoContent>Авторизуйтесь!</NoContent>}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover={false}
        draggable
        theme="light"
        transition={Slide}
      />
    </>
  );
}

export default App;
