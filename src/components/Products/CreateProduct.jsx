import dbservice from "@/AppwriteConfig/DBconfig";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { toast } from "sonner";

const CreateProduct = () => {
  const user = useSelector((state) => state.product.userInfo);

  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm();

  const handleProduct = async (data) => {
    const Uploadedfile = data.imageUrl[0];
    if (!Uploadedfile) return;
    try {
      const response = await dbservice.uploadFile(Uploadedfile);
      if (response) {
        const fileId = response.$id;

        // // Generate the image preview URL after successful upload
        // const previewUrl = dbservice.getFilePreview(fileId);
        // setImagePreviewUrl(previewUrl);

        const product = await dbservice.createPost({
          productName: data.Name,
          userId: user.$id,
          price: data.Price,
          category: data.Category,
          collection: data.Collection,
          description: data.description,
          imageUrl: fileId,
        });

        console.log(product);
        navigate(`/details/${data.Name}`);
        toast("You have successfully added your product ✅");
      }
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center px-4 py-8 min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit(handleProduct)}
        className="w-full max-w-lg border p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col"
      >
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Upload Your Product
        </h1>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
              Enter Product Name:
            </Label>
            <Input
              type="text"
              placeholder="Enter product name"
              id="name"
              {...register("Name", { required: true })}
              className="w-full mt-2"
              required
            />
          </div>

          <div>
            <Label htmlFor="price" className="text-gray-700 dark:text-gray-300">
              Enter Product Price:
            </Label>
            <Input
              type="number"
              placeholder="Enter product price"
              id="price"
              {...register("Price", { required: true })}
              className="w-full mt-2"
              required
            />
          </div>

          <div>
            <Label
              htmlFor="category"
              className="text-gray-700 dark:text-gray-300"
            >
              Enter Product Category:
            </Label>
            <Select
              id="category"
              onValueChange={(value) => setValue("Category", value)}
              required
            >
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Jacket">Jacket</SelectItem>
                <SelectItem value="T-shirt">T-shirt</SelectItem>
                <SelectItem value="Pants">Pants</SelectItem>
                <SelectItem value="Shoes">Shoes</SelectItem>
                <SelectItem value="Dress">Dress</SelectItem>
                <SelectItem value="Accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label
              htmlFor="collection"
              className="text-gray-700 dark:text-gray-300"
            >
              Enter Product Collection:
            </Label>
            <Select
              id="collection"
              onValueChange={(value) => setValue("Collection", value)}
              required
            >
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Collection" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Summer">Summer</SelectItem>
                <SelectItem value="Winter">Winter</SelectItem>
                <SelectItem value="Autumn">Autumn</SelectItem>
                <SelectItem value="Spring">Spring</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label
              htmlFor="description"
              className="text-gray-700 dark:text-gray-300"
            >
              Enter Product Description:
            </Label>
            <textarea
              required
              id="description"
              placeholder="Enter product description"
              {...register("description", { required: true })}
              className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            ></textarea>
          </div>

          <div>
            <Label
              htmlFor="imageUrl"
              className="text-gray-700 dark:text-gray-300"
            >
              Upload Product Image:
            </Label>
            <Input
              required
              type="file"
              {...register("imageUrl", { required: true })}
              className="w-full mt-2"
            />
          </div>

          {/* {imagePreviewUrl && (
            <div className="mt-4">
              <img
                src={imagePreviewUrl}
                alt="Product Preview"
                className="w-32 h-32 object-cover border border-gray-300 dark:border-gray-600 rounded"
              />
            </div>
          )} */}
        </div>
        <Button
          type="submit"
          className="mt-6 bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateProduct;
