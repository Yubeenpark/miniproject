import { routerInformation } from "./routers/Router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const routerObject = createBrowserRouter(routerInformation);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routerObject} />
  </StrictMode>
);
