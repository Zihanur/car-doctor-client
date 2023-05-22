import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Booking from "../pages/Booking/Booking";
import BookingItems from "../pages/BookingItems/BookingItems";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRoutes>
            <Booking></Booking>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/bookingitems",
        element: (
          <PrivateRoutes>
            <BookingItems></BookingItems>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
