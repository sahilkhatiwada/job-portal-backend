import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Job from "../pages/Job";

export const MainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "job",
        element: <Job />,
      },
    ],
  },
];
