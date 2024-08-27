import dbservice from "@/AppwriteConfig/DBconfig";
import { WhyChooseUs } from "@/components";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { allProduct } from "@/store/ProductSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroCarousel from "./HeroCarousel";

const NewArrival = () => {
  const [noData, setNoData] = useState(false);
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setNoData(false);
        const res = await dbservice.getPosts();
        if (res) {
          dispatch(allProduct(res.documents));
        }
      } catch (error) {
        setNoData(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);
  return (
    <div>
      <HeroCarousel />
      {loading && (
        <div className="flex flex-wrap gap-4 p-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="h-64 w-64 p-4 bg-gray-200 rounded-md shadow-md"
            >
              <Skeleton className="h-full w-full bg-gray-300 rounded" />
            </div>
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {noData ? (
          <p className="col-span-full text-center text-lg font-semibold text-gray-700">
            No items found!
          </p>
        ) : (
          products.map((item) => (
            <div
              key={item.$id}
              className="bg-white rounded-lg border shadow-lg overflow-hidden "
            >
              <img
                src={dbservice.getFilePreview(item.imageUrl)}
                alt={item.Name}
                className="w-96 h-96 object-cover transition-transform transform hover:scale-110"
              />
              <div className="p-4">
                <h1 className="text-lg font-bold text-gray-900 mb-2">
                  {item.Name}
                </h1>
                <p className="text-gray-600 mb-4">{`${item.Price} NPR`}</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-400">
                  View Details
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default NewArrival;
