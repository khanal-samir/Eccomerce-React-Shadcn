import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ChekoutBody = () => {
  return (
    <div className="m-4 flex item-center justify-center">
      <Link to="/completed">
        <Button>Complete</Button>
      </Link>
    </div>
  );
};

export default ChekoutBody;
