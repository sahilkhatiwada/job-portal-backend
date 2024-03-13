import MainLayout from "../layouts/mainLayout";
import Home from "../pages/Home";

const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
];

export default mainRoutes;
