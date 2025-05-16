import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddCoffe from "../pages/AddCoffe";
import UpdateCoffe from "../pages/UpdateCoffe";
import CoffeDetails from "../pages/CoffeDetails";
import Error from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffes"),
        Component: Home,
      },
      {
        path: "addcoffe",
        Component: AddCoffe,
      },
      {
        path: "updatecoffe/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffes/${params.id}`),
        Component: UpdateCoffe,
      },
      {
        path: "coffe/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffes/${params.id}`),
        Component: CoffeDetails,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
