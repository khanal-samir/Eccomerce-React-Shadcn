import { Button } from "./ui/button";

const CategoriesContainer = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
          Categories
        </h1>
        <Button variant="link">View all</Button>
      </div>
      <div className="overflow-hidden">
        <div className="flex items-center justify-evenly h-72">
          {[
            { src: "/Jacket.svg", label: "Jackets" },
            { src: "/Tshirt.svg", label: "Tshirts" },
            { src: "/Pant.svg", label: "Pants" },
            { src: "/Shoes.svg", label: "Shoes" },
            { src: "/Dress.svg", label: "Dress" },
            { src: "/Acc.svg", label: "Accessories" },
          ].map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 m-4 transition-transform transform hover:scale-105 cursor-pointer"
            >
              <img
                src={category.src}
                alt={category.label}
                className="w-16 h-16 transition-transform transform hover:scale-110"
              />
              <p className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                {category.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesContainer;
