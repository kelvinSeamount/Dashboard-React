import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/product/Products";
import "./styles/global.scss";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu
              id={0}
              title={""}
              listItems={[
                {
                  id: 1,
                  title: "",
                  url: "",
                  icon: "",
                },
              ]}
            />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
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
