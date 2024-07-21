import { ReactElement } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthRender from "../common/renderProps/AuthRender";
import RootLayout from "../layout/RootLayout";
import AboutCarRentalPerson from "../pages/AboutCarRentalPerson";
import HomePage from "../pages/homepage";
import RentalPage from "../pages/RentalPage";
import RentalDetailPage from "../pages/RentalDetailPage";
import CarRegister from "../pages/carRegister";
import Userpage from "../pages/userpage";
import CarDetail from "../pages/Car Detail/CarDetail";
import DashboardLayout from "../layout/DashboardLayout";

interface RouteObject {
  path: string;
  element: ReactElement;
  children?: RouteObject[];
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRender render={() => <RootLayout />} />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/aboutus",
        element: <AboutCarRentalPerson />,
      },
      {
        path: "/rental/detail",
        element: <RentalDetailPage />,
      },
      {
        path: "/car/register",
        element: <CarRegister />,
      },
      {
        path: "/user",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Userpage />,
          },
          {
            path: "rental",
            element: <RentalPage />,
          },
        ],
      },
      {
        path: "/cardetail/:id",
        element: <CarDetail />,
      },
    ],
  },
] as RouteObject[]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
