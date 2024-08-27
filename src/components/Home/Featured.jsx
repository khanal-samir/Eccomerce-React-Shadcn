import { useSelector } from "react-redux";
import dbservice from "@/AppwriteConfig/DBconfig";
const Featured = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 ">
          Featured
        </h1>
      </div>
      <div className="flex items-center justify-around overflow-x-auto space-x-4 py-4">
        {products?.length > 0 ? (
          [...products].reverse().map(
            (
              product,
              index, // shallow copy because it cannot be mutated
            ) => (
              <div
                key={product.$id}
                className="flex-shrink-0 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden w-48 transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                {index > 5 ? null : (
                  <div>
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
                  </div>
                )}
              </div>
            ),
          )
        ) : (
          <p className="text-gray-600 dark:text-gray-400">No new arrivals</p>
        )}
      </div>
    </div>
  );
};

export default Featured;
