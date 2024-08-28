import { ShoppingCart } from "lucide-react";
import Collection from "./Collection";
import Categories from "./Categories";
import { ModeToggle } from "./ModeToggle";
import SearchBar from "./Search";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form } from "..";
import Logout from "../Form/Logout";

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.product.status);
  const user = useSelector((state) => state.product.userInfo);
  console.log(user);

  return (
    <div className="sticky top-0 p-4 border-b flex flex-wrap justify-between items-center space-y-4 sm:space-y-0 bg-white dark:bg-gray-900 z-50">
      <div className="flex justify-between gap-10 items-center w-full sm:w-auto">
        <img
          src="/logo.svg"
          alt="logo"
          onClick={() => navigate("/")}
          className="cursor-pointer"
        />
        <SearchBar className="sm:hidden" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 font-normal font-sans text-slate-800 cursor-pointer">
        <Categories />

        <Link to="new-arrival">
          <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
            New Arrival
          </h2>
        </Link>
        <Collection />
        {user ? (
          <h1 className="text-gray-800 dark:text-gray-300 font-sans ">
            <Link to="myproducts">
              <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                {user.name} Products
              </h2>
            </Link>
          </h1>
        ) : null}
      </div>

      <div className="flex items-center gap-4 ">
        {isAuthenticated ? (
          <ShoppingCart
            className="cursor-pointer"
            onClick={() => navigate("/cart")}
          />
        ) : null}
        <ModeToggle />
        {isAuthenticated ? <Logout /> : <Form />}
      </div>
    </div>
  );
};
export default Header;
