import { Button } from "@/components/ui/button";
import { Delete } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import dbservice from "@/AppwriteConfig/DBconfig";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import { allProduct } from "@/store/ProductSlice";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

const MyProducts = () => {
  const user = useSelector((state) => state.product.userInfo);
  const products = useSelector((state) => state.product.products);
  const [noData, setNoData] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [editProduct, setEditproduct] = useState(null);

  const handleUpdate = async (newProduct) => {
    try {
      const updatedProduct = { ...editProduct, ...newProduct };
      if (
        !updatedProduct.Name ||
        !updatedProduct.description ||
        !updatedProduct.Price
      ) {
        throw new Error("All fields are required.");
      }
      const response = await dbservice.updatePost({
        product: editProduct,
        newMessage: updatedProduct,
      });
      if (response) {
        setEditproduct(null);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const onSubmit = (data) => {
    handleUpdate(data);
  };

  const handleDelete = async (product) => {
    try {
      const res = await dbservice.deletePost(product.$id);
      if (res) {
        await dbservice.deleteFile(product.imageUrl);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setNoData(false);
        const res = await dbservice.getPosts();
        if (res && res.documents.length > 0) {
          dispatch(allProduct(res.documents));
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
  }, [dispatch]);

  const edit = (product) => {
    setEditproduct(product);
    reset({
      Name: product.Name,
      description: product.description,
      Price: product.Price,
    });
  };

  const userProducts = products.filter(
    (product) => product.userId === user.$id,
  );

  if (loading) {
    return (
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
    );
  }

  if (noData || userProducts.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center py-8  flex-grow">
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
          No items found!
        </p>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Become a Seller and sell your products online!
        </p>
        <Link to="/create-post">
          <Button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Create Post
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {userProducts.map((product) => (
        <div
          key={product.$id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
        >
          <img
            src={dbservice.getFilePreview(product.imageUrl)}
            alt={product.Name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {product.Name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {product.description}
            </p>
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {product.Price} NPR
            </p>
            {editProduct && editProduct.$id === product.$id ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                  {...register("Name")}
                  className="w-full p-2 border rounded-md"
                />
                <textarea
                  {...register("description")}
                  className="w-full p-2 border rounded-md"
                />
                <Input
                  {...register("Price")}
                  type="number"
                  className="w-full p-2 border rounded-md"
                />
                <div className="flex justify-between items-center">
                  <Button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    Save
                  </Button>
                  <Button
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                    onClick={() => setEditproduct(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            ) : (
              <div className="flex justify-between items-center">
                <Button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={() => edit(product)}
                >
                  Update
                </Button>
                <Button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(product)}
                >
                  <Delete className="w-5 h-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProducts;
