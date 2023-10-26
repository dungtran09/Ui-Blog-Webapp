import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h2 className="h2">Let's Talk</h2>

        <div className="wrapper">
          <p>
            Do you want to learn more about how I can help your company overcome
            problems? Let us have a conversation.
          </p>

          <ul className="social-link">
            <li>
              <a href="#" className="icon-box discord">
                <FontAwesomeIcon icon={faBlog} size="1x" />
              </a>
            </li>

            <li>
              <a href="#" className="icon-box twitter">
                <FontAwesomeIcon icon={faBlog} size="1x" />
              </a>
            </li>

            <li>
              <a href="#" className="icon-box facebook">
                <FontAwesomeIcon icon={faBlog} size="1x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
