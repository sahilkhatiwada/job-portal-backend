import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Features from "../pages/Features";
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
      {
        path: "about",
        element: <About />,
      },
      {
        path: "feature",
        element: <Features />,
      },
    ],
  },
];
