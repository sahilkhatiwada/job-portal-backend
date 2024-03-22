import BaseLayout from "../layout/BaseLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";

export const guestRoutes = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
];
