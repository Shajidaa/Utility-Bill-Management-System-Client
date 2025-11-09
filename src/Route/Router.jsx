import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import BillsDetails from "../Pages/BillsDetails/BillsDetails";
import MyPayBills from "../Pages/MyPayBills/MyPayBills";
import Bills from "../Pages/Bills/Bills";

const router = createBrowserRouter([
  {
    path: "/",
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
        path: "/bills-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/bills-details/${params.id}`),
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
    ],
  },
]);

export default router;
