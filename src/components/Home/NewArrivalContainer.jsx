import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useEffect } from "react";
import dbservice from "@/AppwriteConfig/DBconfig";
import { useDispatch, useSelector } from "react-redux";
import { allProduct } from "@/store/ProductSlice";

const NewArrivalContainer = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await dbservice.getPosts();
      if (data) {
        dispatch(allProduct(data.documents));
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="bg-white dark:bg-gray-800 p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          New Arrival
        </h1>
        <Link to="/new-arrival">
          <Button variant="link">View all</Button>
        </Link>
      </div>
      <div className="flex  justify-around overflow-x-auto space-x-5 py-4">
        {products?.length > 0 ? (
          products.map((product, index) => {
            if (index > 5) return;
            return (
              <Link
                to={`/details/${product.Name}`}
                key={product.$id}
                className="flex-shrink-0 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden w-48 transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={dbservice.getFilePreview(product.imageUrl)}
                  alt={product.Name}
                  className="w-full h-32 object-cover transition-transform transform hover:scale-110"
                />
                <div className="p-2">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {product.Name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {product.Price} NPR
                  </p>
                </div>
              </Link>
            );
          })
        ) : (
          <p className="text-gray-600 dark:text-gray-400">No new arrivals</p>
        )}
      </div>
    </div>
  );
};

export default NewArrivalContainer;
