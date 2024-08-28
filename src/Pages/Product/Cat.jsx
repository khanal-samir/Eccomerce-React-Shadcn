import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { allProduct } from "@/store/ProductSlice";
import dbservice from "@/AppwriteConfig/DBconfig";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { setCart } from "@/store/cartSlice";
import { toast } from "sonner";

const Cat = () => {
  const dispatch = useDispatch();
  const { category, collection } = useParams();
  const products = useSelector((state) => state.product.products);
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);
  const user = useSelector((state) => state.product.userInfo);
  console.log(user.$id);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setNoData(false);

      try {
        let data;
        if (category) {
          data = await dbservice.getPosts({
            category: category,
          });
        } else {
          data = await dbservice.getPosts({
            collection: collection,
          });
        }
        if (data && data.documents.length > 0) {
          dispatch(allProduct(data.documents));
          setNoData(false);
        } else {
          setNoData(true);
        }
      } catch (error) {
        setNoData(true);
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, category, collection]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="h-64 w-full bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md"
          >
            <Skeleton className="h-full w-full bg-gray-300 dark:bg-gray-600 rounded" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {noData ? (
        <p className="col-span-full text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
          No items found!
        </p>
      ) : (
        products.map((item) => {
          console.log(item.userId);
          // if (String(item.userId) === String(user.$id)) {
          //   return setNoData(true);
          // }
          return (
            <div
              key={item.$id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={dbservice.getFilePreview(item.imageUrl)}
                alt={item.Name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {item.Name}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{`${item.Price} NPR`}</p>
                <Dialog>
                  <DialogTrigger>
                    <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-lg transition-all">
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="flex flex-col items-center justify-center p-6 space-y-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
                    <DialogHeader className="text-center">
                      <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.Name}
                      </DialogTitle>
                      <div className="border-b mb-4"></div>
                    </DialogHeader>
                    <img
                      src={dbservice.getFilePreview(item.imageUrl)}
                      alt={item.Name}
                      className="w-96 h-96 object-cover rounded-md shadow-lg hover:animate-pulse"
                    />
                    <DialogDescription className="text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
                    </DialogDescription>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Price: {item.Price} NPR
                    </p>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-500 text-white font-medium py-2 rounded-lg transition-all"
                      onClick={() => {
                        if (user.$id === item.userId) {
                          toast(`Cannot add your own product to Cart ❌ `);
                          return;
                        }
                        console.log("added");
                        toast(`${item.Name} added to the cart ✅ `);
                        return dispatch(setCart(item));
                      }}
                    >
                      Add to cart
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cat;
