import {createBrowserRouter} from "react-router-dom";
import Register from "../pages/register";
import Signin from "../pages/signin";
import Login from "../pages/login";
import Homepage from "../pages/homepage";
import Userpage from "../pages/userpage";
import CarRegister from "../pages/carRegister";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
        path: "aboutus",
        element: <div>Aboutus!</div>,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "userpage",
        element: <Userpage />,
      },

      {
        path: "carregister",
        element: <CarRegister />,
      },
  ]);

  export default router;