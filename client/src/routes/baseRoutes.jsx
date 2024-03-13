import BaseLayout from "../layouts/BaseLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";

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
