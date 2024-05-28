import { Link } from "react-router-dom";
import { menu } from "../../data";
import "./menu.scss";

type MenuProps = {
  id: number;
  title: string;
  listItems: [
    {
      id: number;
      title: string;
      url: string;
      icon: string;
    }
  ];
};

const Menu = ({ id, title }: MenuProps) => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={id}>
          <span className="title">{title}</span>

          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              <img src={listItem.icon} alt="HomePage-icon" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
