import Contact from "../Contact/Contact";
import NewLetter from "../NewLetter/NewLetter";
import Tag from "../Tag/Tag";
import Topic from "../Topic/Topic";
import "./Aside.css";

const Aside = () => {
  return (
    <>
      <div className="aside">
        <Topic />
        <Tag />
        <Contact />
        <NewLetter />
      </div>
    </>
  );
};

export default Aside;
