import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

// Array of collection objects
const collections = [
  {
    src: "/Summer.svg",
    label: "Summer",
    description: "Checkout All the Summer Collections",
  },
  {
    src: "/Winter.svg",
    label: "Winter",
    description: "Checkout All the Winter Collections",
  },
  {
    src: "/Autmn.svg",
    label: "Autumn",
    description: "Checkout All the Autumn Collections",
  },
  {
    src: "/Spring.svg",
    label: "Spring",
    description: "Checkout All the Spring Collections",
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
                Collection
              </h2>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-80 h-auto flex flex-col bg-slate-100 dark:bg-slate-800 p-4">
                {collections.map((collection) => (
                  <Link
                    to={`products/collections/${collection.label.toLowerCase()}`}
                    key={collection.label}
                    className="w-full hover:opacity-50 mb-2 flex items-center"
                  >
                    <img
                      src={collection.src}
                      alt={collection.label}
                      className="w-10 h-10 mr-3"
                    />
                    <div>
                      <h2 className="text-lg font-black text-gray-800 dark:text-primary">
                        {collection.label}
                      </h2>
                      <p className="font-light font-sans text-xs text-gray-600 dark:text-gray-300">
                        {collection.description}
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
