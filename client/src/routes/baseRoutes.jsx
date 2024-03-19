import BaseLayout from "../layouts/BaseLayout";
import ForgotPasswordForm from "../pages/ForgetPassword";
import Login from "../pages/Login";
import Register from "../pages/Register";

const baseRoutes = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "forget-password",
        element: <ForgotPasswordForm />,
      },
    ],
  },
];

export default baseRoutes;
