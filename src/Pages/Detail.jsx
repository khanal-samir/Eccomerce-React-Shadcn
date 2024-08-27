import dbservice from "@/AppwriteConfig/DBconfig";
import { allProduct } from "@/store/ProductSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { setCart } from "@/store/cartSlice";

const Detail = () => {
  const { item } = useParams();
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const cartClick = (item) => {
    dispatch(setCart(item));
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await dbservice.getPosts({ search: item });
        if (res.documents.length === 0) setError(true);
        if (res) {
          dispatch(allProduct(res.documents));
        }
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch, item, navigate]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="h-64 w-full bg-gray-200 dark:bg-gray-700 rounded-md shadow-md"
          >
            <Skeleton className="h-full w-full bg-gray-300 dark:bg-gray-600 rounded" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-96 mb-32">
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          No items found!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products?.map((item) => (
        <div
          key={item.$id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
        >
          <img
            src={dbservice.getFilePreview(item.imageUrl)}
            alt={item.Name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {item.Name}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {item.description}
            </p>
            <div className="flex justify-between items-center">
              <div>
                <span className="block text-sm text-gray-500 dark:text-gray-400">
                  Category
                </span>
                <h2 className="text-gray-700 dark:text-gray-200">
                  {item.Category}
                </h2>
              </div>
              <div>
                <span className="block text-sm text-gray-500 dark:text-gray-400">
                  Collection
                </span>
                <h2 className="text-gray-700 dark:text-gray-200">
                  {item.Collection}
                </h2>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
                {item.Price} NPR
              </span>
              <Button
                className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
                onClick={() => cartClick(item)}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Detail;
