import {
  CategoriesContainer,
  CollectionContainer,
  Featured,
  Hero,
  NewArrivalContainer,
  WhyChooseUs,
} from "@/components";

const Home = () => {
  return (
    <div>
      <Hero />
      <NewArrivalContainer />
      <CategoriesContainer />
      <CollectionContainer />
      <Featured />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
