import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeCart } from "@/store/cartSlice";
import dbservice from "@/AppwriteConfig/DBconfig";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { X } from "lucide-react";
import { toast } from "sonner";

const CartBody = () => {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (item) => {
    toast(`${item.Name} has been removed from Cart ✅ `);
    dispatch(removeCart(item.$id));
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900">
      <div className="overflow-x-auto">
        <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <TableHeader>
            <TableRow>
              {["Item", "Title", "Quantity", "Price", "Total"].map((title) => (
                <TableHead
                  key={title}
                  className="text-left text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart?.map((item) => (
              <TableRow key={item.$id}>
                <TableCell className="text-sm text-gray-900 dark:text-gray-300">
                  <img
                    src={dbservice.getFilePreview(item.imageUrl)}
                    alt={item.Name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </TableCell>
                <TableCell className="text-sm text-gray-900 dark:text-gray-300">
                  {item.Name}
                </TableCell>
                <TableCell className="text-sm text-gray-900 dark:text-gray-300">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(item.$id, parseInt(e.target.value))
                    }
                    className="w-16 text-center bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded"
                  />
                </TableCell>
                <TableCell className="text-sm text-gray-900 dark:text-gray-300">
                  {item.Price} NPR
                </TableCell>
                <TableCell className="text-sm text-gray-900 dark:text-gray-300">
                  {item.quantity * item.Price} NPR
                </TableCell>
                <TableCell className="text-sm text-gray-900 dark:text-gray-300 text-center">
                  <button
                    onClick={() => handleRemove(item)}
                    className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <Link to="/">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
        <Link to="/checkout">
          <Button>Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartBody;
