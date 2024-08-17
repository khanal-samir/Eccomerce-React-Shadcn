import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const PayNav = ({ second = false, third = false }) => {
  return (
    <div className="p-6">
      <Breadcrumb className="mb-6 text-2xl">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/" className="hover:text-black hover:dark:text-white">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link
              to="/cart"
              className={`${
                !second && !third
                  ? "text-blue-600 dark:text-blue-400"
                  : "hover:text-black hover:dark:text-white text-black dark:text-white"
              }`}
            >
              Cart
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {(second || third) && (
            <>
              <BreadcrumbItem>
                <Link
                  to="/checkout"
                  className={`${
                    second && !third
                      ? "text-blue-600 dark:text-blue-400"
                      : "hover:text-black hover:dark:text-white text-black dark:text-white"
                  }`}
                >
                  Checkout
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}
          {third && (
            <>
              <BreadcrumbItem>
                <Link
                  to="/completed"
                  className="text-blue-600 dark:text-blue-400"
                >
                  Completed
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-8">
        <h1 className="text-gray-900 dark:text-gray-200 text-center font-bold text-4xl">
          Shopping Cart
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <span
            className={`flex items-center justify-center w-12 h-12 border-2 rounded-full ${
              !second && !third
                ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                : "border-gray-300 text-gray-400 dark:border-gray-600 dark:text-gray-500"
            }`}
          >
            1
          </span>
          <span
            className={`ml-3 font-medium ${
              !second && !third
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-400 dark:text-gray-500"
            }`}
          >
            Shopping Cart
          </span>
        </div>

        <div
          className={`flex-grow border-t-2 mx-6 ${
            !second && !third
              ? "border-blue-600 dark:border-blue-400"
              : "border-gray-300 dark:border-gray-600"
          }`}
        ></div>

        <div className="flex items-center">
          <span
            className={`flex items-center justify-center w-12 h-12 border-2 rounded-full ${
              second && !third
                ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                : "border-gray-300 text-gray-400 dark:border-gray-600 dark:text-gray-500"
            }`}
          >
            2
          </span>
          <span
            className={`ml-3 font-medium ${
              second && !third
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-400 dark:text-gray-500"
            }`}
          >
            Checkout
          </span>
        </div>

        <div
          className={`flex-grow border-t-2 mx-6 ${
            second && !third
              ? "border-blue-600 dark:border-blue-400"
              : "border-gray-300 dark:border-gray-600"
          }`}
        ></div>

        <div className="flex items-center">
          <span
            className={`flex items-center justify-center w-12 h-12 border-2 rounded-full ${
              third
                ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                : "border-gray-300 text-gray-400 dark:border-gray-600 dark:text-gray-500"
            }`}
          >
            3
          </span>
          <span
            className={`ml-3 font-medium ${
              third
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-400 dark:text-gray-500"
            }`}
          >
            Completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default PayNav;
