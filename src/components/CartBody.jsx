import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const CartBody = () => {
  return (
    <div>
      <div className="flex justify-around items-center">
        {["Title", "Quantity", "Price", "Total"].map((title, index) => (
          <h2
            key={index}
            className="text-xl font-light text-gray-900 dark:text-gray-300"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="m-6 flex justify-center gap-6 items-center">
        <Link to="/">
          {" "}
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
