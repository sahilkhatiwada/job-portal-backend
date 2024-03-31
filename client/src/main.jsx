import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./store/store";
import allRoutes from "./routes";

// Create a client
const queryClient = new QueryClient();
const router = createBrowserRouter(allRoutes);
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </QueryClientProvider>
);
