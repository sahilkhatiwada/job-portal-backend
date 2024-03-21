import BaseLayout from "../layout/BaseLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
    ],
  },
];
