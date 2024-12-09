
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "../components/HOC/RootLayout";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <Home />
        ),
      },
      {
        path: "/logIn",
        element: (
          <LogIn />
        ),
      },
      {
        path: "/signUp",
        element: (
          <SignUp />
        ),
      }
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
