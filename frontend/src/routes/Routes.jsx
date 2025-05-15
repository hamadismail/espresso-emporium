import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddCoffe from "../pages/AddCoffe";
import UpdateCoffe from "../pages/UpdateCoffe";
import CoffeDetails from "../pages/CoffeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "addcoffe",
        Component: AddCoffe,
      },
      {
        path: "updatecoffe",
        Component: UpdateCoffe,
      },
      {
        path: "coffe/:id",
        Component: CoffeDetails,
      },
    ],
  },
]);
