const features = [
  {
    icon: "/Delivery.svg",
    title: "Free Delivery",
    description: "This free shipping only for selected region",
  },
  {
    icon: "/payment.svg",
    title: "Payment Method",
    description: "Secure and reliable payment options",
  },
  {
    icon: "/warranty.svg",
    title: "Warranty",
    description: "Guaranteed warranty on selected products",
  },
  {
    icon: "/support.svg",
    title: "Customer Support",
    description: "24/7 customer support for all queries",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-12 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Why Choose Us
      </h2>
      <div className="container mx-auto flex flex-wrap justify-center gap-8 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 w-64 text-center"
          >
            <div className="bg-gray-200 dark:bg-gray-600 p-4 rounded-full mb-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
