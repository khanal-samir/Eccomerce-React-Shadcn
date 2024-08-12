import {
  CategoriesContainer,
  CollectionContainer,
  Hero,
  NewArrivalContainer,
  WhyChooseUs,
} from "@/components";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoriesContainer />
      <NewArrivalContainer />
      <CollectionContainer />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
