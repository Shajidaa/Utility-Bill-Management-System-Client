import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router/dom";
import router from "./Route/Router";
import AuthProvider from "./Context/AuthProvider";
import { ToastContainer } from "react-toastify";
import ThemeContext, { ThemeProvider } from "./Provider/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ThemeContext>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
          <ToastContainer autoClose={1500} />
        </AuthProvider>
      </ThemeContext>
    </ThemeProvider>
  </StrictMode>
);
