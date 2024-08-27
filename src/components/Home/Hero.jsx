import dbservice from "@/AppwriteConfig/DBconfig";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {
  const products = useSelector((state) => state.product.products);
  return (
    <div className="bg-gray-200 shadow-md dark:bg-slate-700 h-96 flex gap-10 items-center px-6 md:px-10">
      <div className="w-full md:w-1/2 flex flex-col space-y-4">
        <h1 className="text-4xl font-bold">Summer Sale 50% Off</h1>
        <p className="text-gray-700 dark:text-gray-200 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          obcaecati voluptate voluptates vel assumenda eum! Voluptatum amet
          commodi quam consequuntur magni vero distinctio dolores cum, quas aut
          ea delectus. Nam?
        </p>
        <Link to="/products/collections/summer">
          {" "}
          <Button className="w-28">Shop Now</Button>
        </Link>
      </div>
      <div className="hidden md:block w-1/3 ml-5">
        <Carousel>
          <CarouselContent className="flex ml-3">
            {products &&
              products.map((item) =>
                item.Collection.toLowerCase() === "summer" ? (
                  <CarouselItem className="basis-1/3" key={item.$id}>
                    <img
                      src={dbservice.getFilePreview(item.imageUrl)}
                      alt={item.Name}
                      className="w-32 h-32 bg-cover rounded shadow-md cursor pointer "
                    />
                  </CarouselItem>
                ) : null,
              )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
