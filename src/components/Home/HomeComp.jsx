import NewsLetter from "../Shared/NewsLetter";
import FeaturedProduct from "./FeaturedProduct";
import Hero from "./Hero";
import WorkList from "./WorkList";

const HomeComp = () => {
  return (
    <div>
      <Hero />
      <WorkList />
      <FeaturedProduct />
      <NewsLetter />
    </div>
  );
};

export default HomeComp;
