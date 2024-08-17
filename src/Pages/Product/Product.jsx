import { ProductNav, ProductSidebar } from "@/components";
import { Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-4/5 p-4 bg-white dark:bg-gray-900">
        <ProductNav />
        <h1 className="text-center text-4xl font-semibold dark:text-gray-300 text-gray-900 mb-6">
          Product List
        </h1>
        <Outlet />
      </div>
      <div className="w-full md:w-1/5 p-3  md:border-r border-gray-200 bg-gray-100 dark:bg-gray-800 md:sticky md:top-0 md:h-screen md:overflow-y-auto">
        <ProductSidebar />
      </div>
    </div>
  );
};

export default Product;
