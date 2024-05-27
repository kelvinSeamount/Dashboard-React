import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>meka</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="Search-icon" className="icon" />
        <img src="app.svg" alt="App-icon" className="icon" />
        <img src="expand.svg" alt="Expand-icon" className="icon" />
        <div className="notification">
          <img
            src="notifications.svg"
            alt="Notification-icon"
            className="icon"
          />
          <span>1</span>
        </div>
        <div className="user">
          <img src="user-icon.jpg" alt="User" />
          <span>Meka</span>
        </div>
        <img src="settings.svg" alt="Settings-icon" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
