import { useEffect } from "react";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import dbservice from "./AppwriteConfig/DBconfig";
import { addProduct, rmProduct, updateProduct } from "./store/ProductSlice";
import conf from "./Conf/Conf";
import { useDispatch } from "react-redux";
import { Toaster } from "sonner";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleRealtimeUpdate = (res) => {
      console.log("Real-time update received", res);
      console.log(res);

      // Handle different types of events
      if (
        res.events.includes(
          `databases.${conf.appwriteDatabaseId}.collections.${conf.appwriteCollectionId}.documents.*.create`,
        )
      ) {
        console.log("created");
        dispatch(addProduct(res.payload));
      } else if (
        res.events.includes(
          `databases.${conf.appwriteDatabaseId}.collections.${conf.appwriteCollectionId}.documents.*.delete`,
        )
      ) {
        console.log("deleted");
        dispatch(rmProduct(res.payload.$id));
      } else if (
        res.events.includes(
          `databases.${conf.appwriteDatabaseId}.collections.${conf.appwriteCollectionId}.documents.*.update`,
        )
      ) {
        console.log("update");
        dispatch(updateProduct(res.payload));
      }
    };
    dbservice.realTime(handleRealtimeUpdate);
    return () => {
      dbservice.unsubscribe(); // to stop double render
    };
  }, [dispatch]);
  return (
    <div className="flex flex-col flex-wrap min-h-full w-full ">
      <Toaster position="bottom-right" />
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default App;
