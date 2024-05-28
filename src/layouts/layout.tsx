import { Outlet } from "react-router-dom";
import Menu from "../components/menu/Menu";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

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
        <div className="menuContent">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
