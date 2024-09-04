import ErrorPage from "../pages/error-page";
import HomePage from "../pages/landing-page";
import GuestLayout from "../pages/landing-page/layout";

export const Router = [
  {
    path: "/",
    element: <GuestLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];
