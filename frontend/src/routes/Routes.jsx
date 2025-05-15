import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddCoffe from "../pages/AddCoffe";

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
    ],
  },
]);
