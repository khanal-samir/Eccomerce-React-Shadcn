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
                second || third
                  ? "hover:text-black hover:dark:text-white"
                  : "hover:text-gray-800 hover:dark:text-gray-400 text-black dark:text-white"
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
                    second
                      ? "hover:text-black hover:dark:text-white"
                      : "hover:text-gray-800 hover:dark:text-gray-400 text-black dark:text-white"
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
                  className="hover:text-black hover:dark:text-white"
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
          <span className="flex items-center justify-center w-12 h-12 border-2 border-black text-black dark:border-white dark:text-white rounded-full">
            1
          </span>
          <span className="ml-3 text-black dark:text-white font-medium">
            Shopping Cart
          </span>
        </div>

        <div className="flex-grow border-t-2 border-black dark:border-gray-600 mx-6"></div>

        <div className="flex items-center">
          <span
            className={`flex items-center justify-center w-12 h-12 border-2 ${
              second
                ? "border-black text-black dark:border-white dark:text-white"
                : "border-gray-300 text-gray-400 dark:border-gray-600 dark:text-gray-500"
            } rounded-full`}
          >
            2
          </span>
          <span
            className={`ml-3 ${
              second
                ? "text-black dark:text-white"
                : "text-gray-400 dark:text-gray-500"
            } font-medium`}
          >
            Checkout
          </span>
        </div>

        <div
          className={`flex-grow border-t-2 ${
            second
              ? "border-black dark:border-gray-600"
              : "border-gray-300 dark:border-gray-600"
          } mx-6`}
        ></div>

        <div className="flex items-center">
          <span
            className={`flex items-center justify-center w-12 h-12 border-2 ${
              third
                ? "border-black text-black dark:border-white dark:text-white"
                : "border-gray-300 text-gray-400 dark:border-gray-600 dark:text-gray-500"
            } rounded-full`}
          >
            3
          </span>
          <span
            className={`ml-3 ${
              third
                ? "text-black dark:text-white"
                : "text-gray-400 dark:text-gray-500"
            } font-medium`}
          >
            Completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default PayNav;
