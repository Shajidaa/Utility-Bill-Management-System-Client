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

const router = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: <Spinner></Spinner>,
    element: <MainLayout></MainLayout>,
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
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/help",
        element: (
          <PrivateRoute>
            <Help></Help>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-bill",
        element: (
          <PrivateRoute>
            <AddBills></AddBills>
          </PrivateRoute>
        ),
      },
      {
        path: "/bills-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://utility-bill-management-system-serv.vercel.app/bills-details/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <BillsDetails></BillsDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPayBills",
        element: (
          <PrivateRoute>
            <MyPayBills></MyPayBills>
          </PrivateRoute>
        ),
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
