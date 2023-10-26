import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faPerson,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";

const Topic = () => {
  return (
    <>
      <div className="topics">
        <h2 className="h2">Topics</h2>

        <a href="#" className="topic-btn">
          <div className="icon-box">
            <FontAwesomeIcon icon={faDatabase} size="1x" />
          </div>

          <p>Database</p>
        </a>

        <a href="#" className="topic-btn">
          <div className="icon-box">
            <FontAwesomeIcon icon={faPerson} size="1x" />
          </div>

          <p>Accessibility</p>
        </a>

        <a href="#" className="topic-btn">
          <div className="icon-box">
            <FontAwesomeIcon icon={faPercent} size="1x" />
          </div>

          <p>Web Performance</p>
        </a>
      </div>
    </>
  );
};

export default Topic;
