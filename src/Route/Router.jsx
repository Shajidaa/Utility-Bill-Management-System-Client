import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import BillsDetails from "../Pages/BillsDetails/BillsDetails";
import MyPayBills from "../Pages/MyPayBills/MyPayBills";
import Bills from "../Pages/Bills/Bills";
import Spinner from "../Components/Shared/Spinner";
import AddBills from "../Pages/Add Bills/AddBills";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyProfile from "../Pages/MyProfile/MyProfile";
import Help from "../Pages/Help/Help";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";
import PersonalLoan from "../Pages/Services/loans/PersonalLoan";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: <Spinner></Spinner>,
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/bills",
        element: <Bills></Bills>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        children: [
          {
            path: "loans/personal-loan",
            element: <PersonalLoan></PersonalLoan>,
          },
        ],
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
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/help",
        element: <Help></Help>,
      },
      {
        path: "/bills-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://utility-bill-management-system-serv.vercel.app/bills-details/${params.id}`
          ),
        element: <BillsDetails></BillsDetails>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myPayBills",
        element: <MyPayBills></MyPayBills>,
      },
      {
        path: "add-bill",
        element: <AddBills></AddBills>,
      },
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
