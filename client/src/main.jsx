import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { mainRoutes } from "./routes/MainRoutes";
import { guestRoutes } from "./routes/guestRoutes";
import { QueryClient, QueryClientProvider } from "react-query";

const router = createBrowserRouter([...guestRoutes, ...mainRoutes]);
// Create a client
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
