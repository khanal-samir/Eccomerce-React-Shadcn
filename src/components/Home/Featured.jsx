import { Button } from "../ui/button";

const Featured = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200 text-center">
        Featured
      </h1>

      <div className="flex items-center justify-evenly h-72">
        <p>Loop items featured</p>
      </div>
    </div>
  );
};

export default Featured;
