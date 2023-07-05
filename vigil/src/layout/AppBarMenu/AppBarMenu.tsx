import { AcmeLogo } from "../../assets/AcmeLogo";
import "./styles/AppBarMenuStyle.css";
import { ChevronRight, Home } from "react-iconly";

const AppBarMenu = () => {
  return (
    <nav className="sidebar">
      <header>
        <div className="image-text">
          <span className="image">
            <AcmeLogo />
          </span>
          <div className="text header-text">
            <span className="name">Lindow</span>
            <span className="profession">Web developper</span>
          </div>
          <div className="toogle">
            <ChevronRight set="bold" />
          </div>
        </div>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-link">
            <li className="nav-link">
              <a href="#">
                <div className="icon"><Home set="bold" /></div>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <div className="icon"><Home set="bold" /></div>
                <span>Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppBarMenu;
