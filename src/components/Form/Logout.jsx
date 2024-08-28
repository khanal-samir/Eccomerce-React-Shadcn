import { Button } from "../ui/button";
import authService from "@/AppwriteConfig/AuthConfig";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@/store/ProductSlice";
import { toast } from "sonner";
const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await authService.logout();
    dispatch(logout());
    navigate("/");
    toast("Successfully Logged out  ✅");
    console.log("Logout Successful");
  };
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Logout;
