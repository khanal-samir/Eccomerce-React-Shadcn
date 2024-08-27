import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

const BecomeSeller = () => {
  const user = useSelector((state) => state.product.userInfo);

  return (
    <div className="bg-gray-200 shadow-lg dark:bg-slate-700 h-96 flex flex-col md:flex-row gap-10 items-center justify-between px-6 md:px-10 py-8 md:py-0">
      <div className="w-full md:w-1/2 flex flex-col space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 leading-tight">
          Become a Seller and Sell Your Clothing
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
          Join our platform and start selling your amazing clothing collections.
          Reach thousands of customers and grow your brand effortlessly.
        </p>
        {user ? (
          <Link to="create-post">
            <Button className="self-center md:self-start">Sell Products</Button>
          </Link>
        ) : (
          <Link to="login">
            <Button className="self-center md:self-start">
              Login to Continue
            </Button>
          </Link>
        )}
      </div>
      <div className="w-full md:w-1/2 flex justify-end">
        <img
          src="./Seller.svg"
          alt="Become a Seller"
          className="w-72 h-72 md:w-96 md:h-96 bg-gray-200"
        />
      </div>
    </div>
  );
};

export default BecomeSeller;
