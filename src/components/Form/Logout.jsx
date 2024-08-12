import { Button } from "../ui/button";
import authService from "@/AppwriteConfig/AuthConfig";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@/store/ProductSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await authService.logout();
    dispatch(logout());
    navigate("/");
    console.log("Logout Successful");
  };
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Logout;
