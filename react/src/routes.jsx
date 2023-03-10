import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Surveys from "./views/Surveys";
import Signup from "./views/Signup";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import { SurveyView } from "./views/SurveyView";
import SurveyPublicView from "./views/SurveyPublicView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/surveys",
        element: <Surveys />,
      },
      {
        path: "/surveys/create",
        element: <SurveyView />,
      },
      {
        path: "/survey/:id",
        element: <SurveyView />,
      },
      {
        path: "/survey/public/:slug",
        element: <SurveyPublicView />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
