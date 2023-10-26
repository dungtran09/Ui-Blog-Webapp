import logoLight from "../../assets/images/logo-light.svg";
import logoDark from "../../assets/images/logo-dark.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="wrapper">
            <a href="#" className="footer-logo">
              <img
                src={logoLight}
                alt="DevBlog's Logo"
                width="150"
                height="40"
                className="logo-light"
              />
              <img
                src={logoDark}
                alt="DevBlog's Logo"
                width="150"
                height="40"
                className="logo-dark"
              />
            </a>

            <p className="footer-text">
              Learn about Web accessibility, Web performance, and Database
              management.
            </p>
          </div>

          <div className="wrapper">
            <p className="footer-title">Quick Links</p>

            <ul>
              <li>
                <a href="#" className="footer-link">
                  Advertise with us
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="wrapper">
            <p className="footer-title">Legal Stuff</p>

            <ul>
              <li>
                <a href="#" className="footer-link">
                  Privacy Notice
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Cookie Policy
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Terms Of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="copyright">
          © Copyright 2022 <a href="#">codewithsadee</a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
