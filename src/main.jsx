import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import MainLayout from "./Layout/MainLayout";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Context/AuthProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router}>
        <MainLayout></MainLayout>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
