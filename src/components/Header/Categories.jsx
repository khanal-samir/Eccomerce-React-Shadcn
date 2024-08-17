import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

// Array of category objects
const categories = [
  {
    src: "/Jacket.svg",
    label: "Jacket",
    description: "Explore our range of jackets",
  },
  {
    src: "/Tshirt.svg",
    label: "T-Shirt",
    description: "Find your perfect T-shirts",
  },
  {
    src: "/Pant.svg",
    label: "Pants",
    description: "Discover our collection of pants",
  },
  {
    src: "/Shoes.svg",
    label: "Shoes",
    description: "Step up your style with our shoes",
  },
  {
    src: "/Dress.svg",
    label: "Dress",
    description: "Beautiful dresses for all occasions",
  },
  {
    src: "/Acc.svg",
    label: "Accessories",
    description: "Complete your look with our accessories",
  },
];

const Collection = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <h2 className="text-base text-gray-800 dark:text-gray-200">
                Categories
              </h2>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-80 h-auto flex flex-col bg-slate-100 dark:bg-slate-800 p-4">
                {categories.map((category) => (
                  <Link
                    to={`products/categories/${category.label.toLowerCase()}`}
                    key={category.label}
                    className="w-full hover:opacity-50 mb-2 flex items-center"
                  >
                    <img
                      src={category.src}
                      alt={category.label}
                      className="w-10 h-10 mr-3"
                    />
                    <div>
                      <h2 className="text-lg font-black text-gray-800 dark:text-primary">
                        {category.label}
                      </h2>
                      <p className="font-light font-sans text-xs text-gray-600 dark:text-gray-300">
                        {category.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Collection;
