import { NavLink } from "react-router-dom";

const categories = [
  { name: "Jacket", to: "categories/jacket" },
  { name: "T-shirt", to: "categories/t-shirt" },
  { name: "Pants", to: "categories/pants" },
  { name: "Shoes", to: "categories/shoes" },
  { name: "Dress", to: "categories/dress" },
  { name: "Accessories", to: "categories/accessories" },
];

const collections = [
  { name: "Summer", to: "collections/summer" },
  { name: "Winter", to: "collections/winter" },
  { name: "Spring", to: "collections/spring" },
  { name: "Autumn", to: "collections/autumn" },
];

const distributors = [
  { name: "Distributor 1", to: "distributor/1" },
  { name: "Distributor 2", to: "distributor/2" },
  { name: "Distributor 3", to: "distributor/3" },
  { name: "Distributor 4", to: "distributor/4" },
  { name: "Distributor 5", to: "distributor/5" },
];

const ProductSidebar = () => {
  return (
    <div className="flex flex-col space-y-3 p-3 w-full md:w-full ">
      {/* Categories */}
      <div className="flex flex-col md:flex-col">
        <NavLink
          to="categories"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-blue-600"
              : "text-lg font-semibold hover:underline"
          }
        >
          <h2>Categories</h2>
        </NavLink>
        <hr className="border-t border-gray-300 dark:border-gray-600 mt-2 mb-3" />
      </div>
      <div className="flex flex-wrap gap-2 md:flex-col md:gap-1 pl-0 md:pl-3">
        {categories.map((category) => (
          <NavLink
            to={category.to}
            key={category.name}
            className={({ isActive }) =>
              isActive
                ? "text-base text-blue-500 font-medium"
                : "text-base font-normal hover:underline hover:text-gray-700 dark:hover:text-gray-300"
            }
          >
            <div className="flex items-center space-x-2">
              <h2>{category.name}</h2>
            </div>
          </NavLink>
        ))}
      </div>

      {/* Collections */}
      <div className="flex flex-col mt-4 md:flex-col">
        <NavLink
          to="collections"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-blue-600"
              : "text-lg font-semibold hover:underline"
          }
        >
          <h2>Collections</h2>
        </NavLink>
        <hr className="border-t border-gray-300 dark:border-gray-600 mt-2 mb-3" />
      </div>
      <div className="flex flex-wrap gap-2 md:flex-col md:gap-1 pl-0 md:pl-3">
        {collections.map((collection) => (
          <NavLink
            to={collection.to}
            key={collection.name}
            className={({ isActive }) =>
              isActive
                ? "text-base text-blue-500 font-medium"
                : "text-base font-normal hover:underline hover:text-gray-700 dark:hover:text-gray-300"
            }
          >
            <div className="flex items-center space-x-2">
              <h2>{collection.name}</h2>
            </div>
          </NavLink>
        ))}
      </div>

      {/* Distributors */}
      <div className="flex flex-col mt-4 md:flex-col">
        <NavLink
          to="distributors"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-blue-600"
              : "text-lg font-semibold hover:underline"
          }
        >
          <h2>Distributors</h2>
        </NavLink>
        <hr className="border-t border-gray-300 dark:border-gray-600 mt-2 mb-3" />
      </div>
      <div className="flex flex-wrap gap-2 md:flex-col md:gap-1 pl-0 md:pl-3">
        {distributors.map((distributor) => (
          <NavLink
            to={distributor.to}
            key={distributor.name}
            className={({ isActive }) =>
              isActive
                ? "text-base text-blue-500 font-medium"
                : "text-base font-normal hover:underline hover:text-gray-700 dark:hover:text-gray-300"
            }
          >
            <div className="flex items-center space-x-2">
              <h2>{distributor.name}</h2>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ProductSidebar;
