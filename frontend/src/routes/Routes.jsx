import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddCoffe from "../pages/AddCoffe";
import UpdateCoffe from "../pages/UpdateCoffe";
import CoffeDetails from "../pages/CoffeDetails";
import Error from "../pages/Error";
import Spinner from "../components/ui/Spinner";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: () => fetch("https://coffe-shop-server-ebon.vercel.app/coffes"),
        hydrateFallbackElement: <Spinner />,
        Component: Home,
      },
      {
        path: "addcoffe",
        Component: AddCoffe,
      },
      {
        path: "updatecoffe/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffe-shop-server-ebon.vercel.app/coffes/${params.id}`
          ),
        hydrateFallbackElement: <Spinner />,
        Component: UpdateCoffe,
      },
      {
        path: "coffe/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffe-shop-server-ebon.vercel.app/coffes/${params.id}`
          ),
        hydrateFallbackElement: <Spinner />,
        Component: CoffeDetails,
      },
      {
        path: "auth/login",
        Component: Login,
      },
      {
        path: "auth/signup",
        Component: SignUp,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
