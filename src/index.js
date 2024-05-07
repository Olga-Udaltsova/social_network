import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Auth } from "./pages/Auth";
import { Registration } from "./pages/Registration";
import { AllUsers } from "./pages/AllUsers";
import { Main } from "./pages/Main";
import { MyPage } from "./pages/MyPage";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "reg",
    element: <Registration />,
  },
  {
    path: "main",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "my",
        element: <MyPage />,
      },
      {
        path: "users",
        element: <AllUsers />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
