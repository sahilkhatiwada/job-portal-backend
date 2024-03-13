import BaseLayout from "../layouts/BaseLayout";
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
        path: "login",
        element: <Login />,
      },
    ],
  },
];

export default baseRoutes;
