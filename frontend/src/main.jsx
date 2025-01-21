import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import LegendaryCars from "./pages/LegendaryCars";
import Renovations from "./pages/Renovations";
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Events",
    element: <Events/>
  },
  {
    path: "/LegendaryCars",
    element: <LegendaryCars/>
  },
  {
    path: "/Renovations",
    element: <Renovations/>
  },
  {
    path: "/About",
    element: <About/>
  },
  {
    path: "/Contact",
    element: <Contact/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);