import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/product/Products";
import "./styles/global.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        //Login page can be added here
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
