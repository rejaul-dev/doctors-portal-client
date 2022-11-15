import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../layout/Main";
import Login from "../../Pages/Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
    ],
  },
]);

export default router;
