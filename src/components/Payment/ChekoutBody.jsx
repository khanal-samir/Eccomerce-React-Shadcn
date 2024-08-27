import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CheckoutBody = () => {
  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Buyer Info Section */}
        <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Buyer Info</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <Input placeholder="Full Name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <Input placeholder="Address" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Contact</label>
              <Input placeholder="Contact" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <Input placeholder="City" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Zip Code
                </label>
                <Input placeholder="Zip Code" />
              </div>
            </div>
          </form>
        </div>

        {/* Payment Method Section */}
        <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-3 gap-4">
              <Button variant="outline">Credit Card</Button>
              <Button variant="outline">Bank Transfer</Button>
              <Button variant="outline">Esewa</Button>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Name on Card
              </label>
              <Input placeholder="Name on Card" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Card Number
                </label>
                <Input placeholder="Card Number" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVV</label>
                <Input placeholder="CVV" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4"></div>
            <Link to="/completed">
              <Button className="w-full mt-4">Checkout</Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBody;
