import Aside from "../compoments/Aside/Aside";
import Blog from "../compoments/Blog/Blog";
import Hero from "../compoments/Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="main">
        <div className="container">
          <Blog />
          <Aside />
        </div>
      </div>
    </>
  );
};

export default Home;
