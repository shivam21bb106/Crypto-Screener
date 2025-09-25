import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Crypto from "./pages/Crypto";
import Trending from "./pages/Trending";
import Saved from "./pages/Saved";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,   // parent layout
    children: [
      {
        index: true,      // default route => "/"
        element: <Crypto />
      },
      {
        path: "trending", // => "/trending"
        element: <Trending />
      },
      {
        path: "saved",    // => "/saved"
        element: <Saved />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
