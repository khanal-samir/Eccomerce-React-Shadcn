import {
  CategoriesContainer,
  CollectionContainer,
  Featured,
  NewArrivalContainer,
  WhyChooseUs,
} from "@/components";
import HeroCarousel from "./HeroCarousel";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <CategoriesContainer />
      <NewArrivalContainer />
      <CollectionContainer />
      <Featured />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
