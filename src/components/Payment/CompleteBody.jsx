import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const CompleteBody = () => {
  return (
    <div className="flex flex-col my-24 items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Checkout Complete!
      </h1>
      <p className="text-lg md:text-xl text-center mb-8 max-w-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Link to="/">
        <Button className="text-base md:text-lg px-6 py-3">
          Go Shopping Again
        </Button>
      </Link>
    </div>
  );
};

export default CompleteBody;
