import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx"
import ForgotPassword from "../pages/ForgotPassword.jsx";
import VerifyOtp from "../pages/VerifyOtp.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";
import UserMenuMobile from "../pages/UserMenuMobile.jsx";
import Dashboard from "../layout/Dashboard.jsx";
import Profile from "../pages/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword/>
      },
      {
        path: "verify-otp",
        element: <VerifyOtp/>
      },
      {
        path: "reset-password",
        element: <ResetPassword/>
      },
      {
        path: "user",
        element: <UserMenuMobile />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      }
    ],
  },
]);

export default router;
