import NewsLetter from "../Shared/NewsLetter";
import FeaturedProject from "./FeaturedProject";
import Hero from "./Hero";
import WorkList from "./WorkList";

const HomeComp = () => {
  return (
    <div>
      <Hero />
      <section>
        <WorkList />
      </section>
      <FeaturedProject />
      <NewsLetter />
    </div>
  );
};

export default HomeComp;
