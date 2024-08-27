import { BecomeSeller, Hero } from "@/components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroCarousel = () => {
  return (
    <Carousel>
      <CarouselContent className="w-screen h-96 md:h-[32rem]  rounded">
        <CarouselItem className="w-full h-full">
          <BecomeSeller />
        </CarouselItem>
        <CarouselItem className="w-full h-full">
          <Hero />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="mt-20 absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-600 text-white rounded-full p-2 z-10" />
      <CarouselNext className="mt-16 absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-600 text-white rounded-full p-2 z-10" />
    </Carousel>
  );
};

export default HeroCarousel;
