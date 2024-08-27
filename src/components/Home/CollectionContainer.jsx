import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const CollectionContainer = () => {
  return (
    <div className="flex flex-col space-y-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
          Collection
        </h1>
        <Link to="/products/collections">
          <Button variant="link">View all</Button>
        </Link>
      </div>
      <div className="overflow-hidden">
        <div className="flex items-center justify-evenly h-72">
          {[
            { src: "/Summer.svg", label: "Summer" },
            { src: "/Winter.svg", label: "Winter" },
            { src: "/Autmn.svg", label: "Autumn" },
            { src: "/Spring.svg", label: "Spring" },
          ].map((category, index) => (
            <Link
              to={`products/collections/${category.label.toLowerCase()}`}
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionContainer;
