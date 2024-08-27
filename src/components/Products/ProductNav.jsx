import { useParams, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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

const ProductNav = () => {
  const { category, collection, seller } = useParams();

  const currentCat = categories.find(
    (cat) => cat.name.toLowerCase() === category?.toLowerCase(),
  );
  const currentColl = collections.find(
    (coll) => coll.name.toLowerCase() === collection?.toLowerCase(),
  );
  const currentDist = distributors.find(
    (dist) => dist.name.toLowerCase() === seller?.toLowerCase(),
  );
  // need to fix the Distributor section
  return (
    <div className="px-2 ">
      <Breadcrumb className=" text-lg">
        <BreadcrumbList className="flex items-center ">
          <BreadcrumbItem>
            <Link
              to="/"
              className="hover:text-blue-600 hover:dark:text-blue-400"
            >
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {category && (
            <>
              <BreadcrumbItem>
                <Link
                  to="/products/categories"
                  className="hover:text-blue-600 hover:dark:text-blue-400"
                >
                  Categories
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}

          {currentCat && (
            <>
              <BreadcrumbItem>
                <Link
                  to={currentCat.to}
                  className="hover:text-blue-600 hover:dark:text-blue-400"
                >
                  {currentCat.name}
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}

          {collection && (
            <>
              <BreadcrumbItem>
                <Link
                  to="/products/collections"
                  className="hover:text-blue-600 hover:dark:text-blue-400"
                >
                  Collections
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}

          {currentColl && (
            <>
              <BreadcrumbItem>
                <Link
                  to={currentColl.to}
                  className="hover:text-blue-600 hover:dark:text-blue-400"
                >
                  {currentColl.name}
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}

          {seller && (
            <>
              <BreadcrumbItem>
                <Link
                  to="distributor"
                  className="hover:text-blue-600 hover:dark:text-blue-400"
                >
                  Distributors
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}

          {currentDist && (
            <>
              <BreadcrumbItem>
                <Link
                  to={currentDist.to}
                  className="hover:text-blue-600 hover:dark:text-blue-400"
                >
                  {currentDist.name}
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default ProductNav;
