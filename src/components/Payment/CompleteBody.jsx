import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const CompleteBody = () => {
  return (
    <div className="m-4 flex item-center justify-center">
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
};

export default CompleteBody;
