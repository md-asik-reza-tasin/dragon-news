import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import Home from "./Pages/Home.jsx";
import AuthContext from "./AuthContext/AuthContext.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Details from "./Pages/Details.jsx";
import PrivateRoute from "./AuthContext/PrivateRoute.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
      
    </AuthContext>
  </StrictMode>
);
