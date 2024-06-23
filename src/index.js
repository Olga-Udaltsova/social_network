import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Auth } from "./pages/Auth/Auth";
import { Registration } from "./pages/Registration/Registration";
import { Loader } from "./components/ui/Loader/Loader";
import "./index.css";
import App from "./App";

const Main = lazy(() => import("./pages/Main/Main"));
const AllUsers = lazy(() => import("./pages/AllUsers/AllUsers"));
const MyPage = lazy(() => import("./pages/MyPage/MyPage"));
const DetailPost = lazy(() => import("./pages/DetailPost/DetailPost"));
const Publication = lazy(() => import("./pages/Publication/Publication"));
const User = lazy(() => import("./pages/User/User"));

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
        element: (
          <Suspense fallback={<Loader />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "my",
        element: (
          <Suspense fallback={<Loader />}>
            <MyPage />
          </Suspense>
        ),
      },
      {
        path: "publish",
        element: (
          <Suspense fallback={<Loader />}>
            <Publication />
          </Suspense>
        ),
      },
      {
        path: "post/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <DetailPost />
          </Suspense>
        ),
      },
      {
        path: "users",
        element: (
          <Suspense fallback={<Loader />}>
            <AllUsers />
          </Suspense>
        ),
      },
      {
        path: ":id",
        element: (
          <Suspense fallback={<Loader />}>
            <User />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loader />}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
