import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "@/AppwriteConfig/AuthConfig";
import { login as sliceLogin } from "../../store/ProductSlice";
import { LoaderCircle } from "lucide-react";
export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [userFetched, setUserFetched] = useState(false); // New state
  const authStatus = useSelector((state) => state.product.status);
  const dispatch = useDispatch();

  useEffect(() => {
    const onload = async () => {
      try {
        const userData = await authService.getCurrentUser();
        console.log("User data:", userData);
        if (userData) {
          dispatch(sliceLogin(userData));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setUserFetched(true);
      }
    };
    onload();
  }, [dispatch, authStatus]);

  useEffect(() => {
    if (userFetched) {
      if (authentication && authStatus !== authentication) {
        navigate("/login");
      }
      // }
    }
    setLoader(false);
  }, [authStatus, navigate, authentication, userFetched]);

  return loader ? (
    <LoaderCircle className=" m-auto  w-32 h-32  items-center  animate-spin" />
  ) : (
    <>{children}</>
  );
}
