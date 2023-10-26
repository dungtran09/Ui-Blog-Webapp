import logoLight from "../../assets/images/logo-light.svg";
import logoDark from "../../assets/images/logo-dark.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun, faClose } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a href="#">
            <img
              src={logoLight}
              alt="Devblog's logo"
              width="150"
              height="40"
              className="logo-light"
            />
            <img
              src={logoDark}
              alt="Devblog's logo"
              width="150"
              height="40"
              className="logo-dark"
            />
          </a>

          <div className="btn-group">
            <button className="theme-btn theme-btn-mobile light">
              <FontAwesomeIcon icon={faSun} size="1x" />
            </button>

            <button className="nav-menu-btn">
              <FontAwesomeIcon icon={faBars} size="1x" />
            </button>
          </div>

          <div className="flex-wrapper">
            <ul className="desktop-nav">
              <li>
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="nav-link">
                  About Me
                </a>
              </li>

              <li>
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>

            <button className="theme-btn theme-btn-desktop light"></button>
          </div>

          <div className="mobile-nav">
            <button className="nav-close-btn">
              <FontAwesomeIcon icon={faClose} size="1x" />
            </button>

            <div className="wrapper">
              <p className="h3 nav-title">Main Menu</p>

              <ul>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    About Me
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="h3 nav-title">Topics</p>

              <ul>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Database
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Accessibility
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Web Performance
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
